import { resolve } from 'path';

import { readJSON, readdir } from 'fs-extra';

import { CONTENT_PATH } from './constants';


export interface GetFilesOptions {
    limit?: number;
    page?: number;
}

export async function getFiles<T>(
    filePath: string,
    { limit = 6, page = 1 }: GetFilesOptions = { limit: 6, page: 1 },
): Promise<T[]> {
    const files = await readdir(resolve(process.cwd(), CONTENT_PATH, filePath));

    const jsonFiles = files
        // .reverse()
        .slice((page - 1) * limit, (page * limit))
        .filter((item) => (/\.json/i).test(item));

    return Promise.all(jsonFiles.map(async (fileName) => {
        const fileJson = await readJSON(resolve(process.cwd(), CONTENT_PATH, filePath, fileName), 'utf-8');
        fileJson.slug = fileName.replace(/\.json/i, '');
        return fileJson;
    }));
}


