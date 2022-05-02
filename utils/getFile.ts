import { resolve } from 'path';

import { readJSON } from 'fs-extra';


export async function getFile<T>(filePath: string, slug: string): Promise<T> {
    const file = await readJSON(resolve(process.cwd(), './public/content', filePath, `${slug}.json`), 'utf-8');

    file.slug = slug;
    return file;
}
