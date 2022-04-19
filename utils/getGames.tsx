import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { IGame, INews } from '~/types';


const CONTENT_PATH = './public/content';

export function getFiles<T>(filePath: string): T[] {
    const files = readdirSync(resolve(process.cwd(), CONTENT_PATH, filePath));

    const jsonFiles = files
        .reverse()
        .slice(0, 6)
        .filter((item) => (/\.json/i).test(item));

    return jsonFiles.map((fileName) => {
        const gameString = readFileSync(resolve(process.cwd(), CONTENT_PATH, filePath, fileName), 'utf-8');
        const gameJson = JSON.parse(gameString);
        gameJson.slug = fileName.replace(/\.json/i, '');
        return gameJson;
    });
}

export function getGames() {
    return getFiles<IGame>('games');
}

export function getNews() {
    return getFiles<INews>('news');
}
