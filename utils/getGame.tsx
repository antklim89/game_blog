import { readFileSync } from 'fs';
import { resolve } from 'path';

import { IGame } from '~/types';


export function getGame(slug: string) {
    const gameString = readFileSync(resolve(process.cwd(), './public/content/games', `${slug}.json`), 'utf-8');
    const game: IGame = JSON.parse(gameString);

    game.slug = slug;
    return game;
}
