import { IGamesCarousel } from '~/types';

import { getFile } from './getFile';


export function getGamesCarousel() {
    return getFile<{ items: IGamesCarousel[]; }>('gamesCarousel', 'index');
}
