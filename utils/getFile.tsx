import { readFileSync } from 'fs';
import { resolve } from 'path';


export function getFile<T>(filePath: string, slug: string): T {
    const fileString = readFileSync(resolve(process.cwd(), './public/content', filePath, `${slug}.json`), 'utf-8');
    const file = JSON.parse(fileString);

    file.slug = slug;
    return file;
}
