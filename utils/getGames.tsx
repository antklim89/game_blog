import { IGame } from '~/types';

import { getFiles } from './getFiles';


export function getGames() {
    return getFiles<IGame>('games');
}
