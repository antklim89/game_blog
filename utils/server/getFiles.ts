import { resolve } from 'path';

import { readJSON, readdir } from 'fs-extra';
import memoize from 'lodash/memoize';

import { GetFilesResult } from '~/types';

import { CONTENT_PATH } from './constants';


export interface GetFilesOptions {
    limit?: number;
    page?: number;
}


const getMemoizedFiles = memoize(async (fileDir: string) => {
    const fileNames = await readdir(fileDir);

    const result = await Promise.all(fileNames
        .filter((filename) => (/\.json/i).test(filename))
        .map(async (fileName) => {
            const fileJson = await readJSON(resolve(fileDir, fileName), 'utf-8');
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
    { limit = 6, page = 1 }: GetFilesOptions = { limit: 6, page: 1 },
): Promise<GetFilesResult<T>> {
    const fileDir = resolve(process.cwd(), CONTENT_PATH, filePath);
    const fileJsons = await getMemoizedFiles(fileDir);

    return {
        items: fileJsons.slice((page - 1) * limit, (page * limit)) as T[],
        totalPages: Math.ceil(fileJsons.length / limit),
    };
}
