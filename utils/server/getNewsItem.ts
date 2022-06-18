import { INews } from '~/types';

import { getFile } from './getFile';


export async function getNewsItem(slug: string) {
    const newsItem = await getFile<INews>('news', slug);

    return newsItem;
}
