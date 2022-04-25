import { IGame } from '~/types';

import { getFile } from './getFile';


export function getGame(slug: string) {
    return getFile<IGame>('game', slug);
}
