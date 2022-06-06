import { resolve } from 'path';

import { readJSON } from 'fs-extra';

import { CONTENT_PATH } from './constants';


export async function getFile<T>(filePath: string, slug: string): Promise<T> {
    const file = await readJSON(resolve(process.cwd(), CONTENT_PATH, filePath, `${slug}.json`), 'utf-8');

    file.slug = slug;
    return file;
}
