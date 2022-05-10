import { resolve } from 'path';

import { readJSON, readdir, statSync } from 'fs-extra';
import memoize from 'lodash/memoize';

import { GetFilesResult } from '~/types';

import { CONTENT_PATH } from './constants';


export interface GetFilesOptions {
    limit?: number;
    page?: number;
}


const getMemoizedFiles = memoize(async (fileDir: string) => {
    const fileNames = await readdir(fileDir);

    return Promise.all(fileNames
        .filter((filename) => (/\.json/i).test(filename))
        .map((fileName) => ({
            fileName,
            time: statSync(resolve(fileDir, fileName)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time)
        .map(({ fileName }) => fileName)
        .map(async (fileName) => {
            const fileJson = await readJSON(resolve(fileDir, fileName), 'utf-8');
            fileJson.slug = fileName.replace(/\.json/i, '');
            return fileJson;
        }));
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
