import { INews } from '~/types';

import { getFile } from './getFile';


export function getNewsItem(slug: string) {
    return getFile<INews>('news', slug);
}
