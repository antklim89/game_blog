import { INews } from '~/types';

import { getFiles } from './getFiles';


export function getNews() {
    return getFiles<INews>('news');
}
