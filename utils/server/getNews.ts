import truncate from 'lodash/truncate';

import { INews } from '~/types';

import { getFiles, GetFilesOptions } from './getFiles';


export async function getNews(opts: GetFilesOptions) {
    const news = await getFiles<INews>('news', opts);
    news.items.forEach((newsItem) => {
        newsItem.body = truncate(newsItem.body, { length: 200 });
        newsItem.publishedAt = new Date(newsItem.publishedAt).toLocaleString();
    });

    return news;
}
