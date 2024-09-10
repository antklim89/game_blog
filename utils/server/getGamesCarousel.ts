import type { IGamesCarousel } from '~/types';
import { getFile } from './getFile';


export async function getGamesCarousel() {
  return getFile<{ items: IGamesCarousel[] }>('gamesCarousel', 'index');
}
