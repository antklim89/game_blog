import path from 'node:path';
import process from 'node:process';
import { readdir, readJSON } from 'fs-extra';
import memoize from 'lodash/memoize';
import type { GetFilesResult } from '~/types';
import { CONTENT_PATH } from './constants';


export interface GetFilesOptions {
  limit?: number;
  page?: number;
  search?: Record<string, string>;
}


const getMemoizedFiles = memoize(async (fileDir: string) => {
  const fileNames = await readdir(fileDir);

  const result = await Promise.all(fileNames
    .filter(filename => (/\.json/i).test(filename))
    .map(async (fileName) => {
      const fileJson = await readJSON(path.resolve(fileDir, fileName), 'utf-8') as Record<string, unknown>;
      fileJson.slug = fileName.replace(/\.json/i, '');
      return fileJson;
    }));

  result.sort((a, b) => {
    return new Date(Number(b.createdAt) || 0).getTime() - new Date(Number(a.createdAt) || 0).getTime();
  });

  return result;
});


export async function getFiles<T>(
  filePath: string,
  { limit = 6, page = 1, search }: GetFilesOptions = { limit: 6, page: 1 },
): Promise<GetFilesResult<T>> {
  const fileDir = path.resolve(process.cwd(), CONTENT_PATH, filePath);
  const fileJsons = await getMemoizedFiles(fileDir);

  const searchedFiles = searchFiles(fileJsons, search);

  return {
    items: searchedFiles.slice((page - 1) * limit, (page * limit)) as T[],
    totalPages: Math.ceil(searchedFiles.length / limit),
  };
}


function searchFiles(fileJsons: Record<string, unknown>[], search?: Record<string, string>) {
  if (!search) return fileJsons;
  return fileJsons.filter((file) => {
    return Object.entries(search).every(([key, value]) => file[key] === value);
  });
}

