import Showdown from 'showdown';

import { INews } from '~/types';

import { getFile } from './getFile';


export async function getNewsItem(slug: string) {
    const newsItem = await getFile<INews>('news', slug);
    newsItem.body = new Showdown.Converter().makeHtml(newsItem.body);
    newsItem.publishedAt = new Date(newsItem.publishedAt).toLocaleString();

    return newsItem;
}
