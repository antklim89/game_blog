import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { IGame } from '~/types';


export function getGames() {
    const gamesFiles = readdirSync(resolve(process.cwd(), './public/content/games'));
    const gamesJsons = gamesFiles
        .reverse()
        .slice(0, 6)
        .filter((item) => (/\.json/i).test(item));

    const games = gamesJsons.map((fileName) => {
        const gameString = readFileSync(resolve(process.cwd(), './public/content/games', fileName), 'utf-8');
        const gameJson: IGame = JSON.parse(gameString);
        gameJson.slug = fileName.replace(/\.json/i, '');
        return gameJson;
    });
    return games;
}
