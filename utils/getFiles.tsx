import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';


const CONTENT_PATH = './public/content';

export function getFiles<T>(filePath: string): T[] {
    const files = readdirSync(resolve(process.cwd(), CONTENT_PATH, filePath));

    const jsonFiles = files
        .reverse()
        .slice(0, 6)
        .filter((item) => (/\.json/i).test(item));

    return jsonFiles.map((fileName) => {
        const fileString = readFileSync(resolve(process.cwd(), CONTENT_PATH, filePath, fileName), 'utf-8');
        const fileJson = JSON.parse(fileString);
        fileJson.slug = fileName.replace(/\.json/i, '');
        return fileJson;
    });
}


