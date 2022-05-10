import { resolve } from 'path';

import { readJSON, readdir } from 'fs-extra';

import { GetFilesResult } from '~/types';

import { CONTENT_PATH } from './constants';


export interface GetFilesOptions {
    limit?: number;
    page?: number;
}

export async function getFiles<T>(
    filePath: string,
    { limit = 6, page = 1 }: GetFilesOptions = { limit: 6, page: 1 },
): Promise<GetFilesResult<T>> {
    const files = await readdir(resolve(process.cwd(), CONTENT_PATH, filePath));
    const totalPages = Math.ceil(files.length / limit);

    const jsonFiles = files
        .reverse()
        .filter((item) => (/\.json/i).test(item))
        .slice((page - 1) * limit, (page * limit));

    const items = await Promise.all(jsonFiles.map(async (fileName) => {
        const fileJson = await readJSON(resolve(process.cwd(), CONTENT_PATH, filePath, fileName), 'utf-8');
        fileJson.slug = fileName.replace(/\.json/i, '');
        return fileJson;
    }));

    return {
        items,
        totalPages,
    };
}


