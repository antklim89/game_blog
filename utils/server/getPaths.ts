import { resolve } from 'path';

import { readdir } from 'fs-extra';

import { CONTENT_PATH } from './constants';


export async function getPaths(path: string) {
    const files = await readdir(resolve(process.cwd(), CONTENT_PATH, path));

    const paths = files
        .filter((file) => (/\.json$/gi).test(file))
        .map((file) => file.replace('.json', ''))
        .map((file) => ({ params: { slug: file } }));

    return paths;
}
