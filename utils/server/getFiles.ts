import { resolve } from 'path';

import { readJSON, readdir } from 'fs-extra';


const CONTENT_PATH = './public/content';

export async function getFiles<T>(filePath: string): Promise<T[]> {
    const files = await readdir(resolve(process.cwd(), CONTENT_PATH, filePath));

    const jsonFiles = files
        .reverse()
        .slice(0, 6)
        .filter((item) => (/\.json/i).test(item));

    return Promise.all(jsonFiles.map(async (fileName) => {
        const fileJson = await readJSON(resolve(process.cwd(), CONTENT_PATH, filePath, fileName), 'utf-8');
        fileJson.slug = fileName.replace(/\.json/i, '');
        return fileJson;
    }));
}


