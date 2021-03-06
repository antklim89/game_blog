import { resolve } from 'path';

import { readdir } from 'fs-extra';
import chunk from 'lodash/chunk';

import { CONTENT_PATH } from './constants';


export async function getPagesPaths(limit: number, filesDir: string) {
    const files = await readdir(resolve(process.cwd(), CONTENT_PATH, filesDir));

    const paths = chunk(files, limit).map((_, index) => ({ params: { page: String(index + 1) } }));
    return paths;
}
