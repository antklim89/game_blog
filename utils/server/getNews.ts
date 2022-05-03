import Showdown from 'showdown';

import { INews } from '~/types';

import { getFiles } from './getFiles';


export async function getNews() {
    const news = await getFiles<INews>('news');
    news.forEach((newsItem) => {
        newsItem.body = new Showdown.Converter().makeHtml(newsItem.body);
    });

    return news;
}