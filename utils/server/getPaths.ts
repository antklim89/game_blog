import { resolve } from 'path';

import { readdir } from 'fs-extra';


export async function getPaths(path: string) {
    const files = await readdir(resolve(process.cwd(), './public/content', path));

    const paths = files
        .filter((file) => (/\.json$/gi).test(file))
        .map((file) => file.replace('.json', ''))
        .map((file) => ({ params: { slug: file } }));

    return paths;
}
