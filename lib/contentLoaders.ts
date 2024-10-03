import type { FilesFilterOptions, ReviewFieldsList } from './types';
import { truncate } from 'lodash';
import NodeCache from 'node-cache';
import {
  filterContent,
  getFile,
  getFiles,
  paginateContent,
} from './fileLoaders';
import {
  aboutSchema,
  gamesCarouselSchema,
  headerSchema,
  newsSchema,
  reviewSchema,
} from './schemas';


const nodeCache = new NodeCache({ stdTTL: 60 * 10 });

export async function getAbout() {
  return getFile('about', aboutSchema);
}

export async function getGamesCarousel() {
  return getFile('gamesCarousel', gamesCarouselSchema);
}

export async function getHeader() {
  return getFile('header', headerSchema);
}

export async function getReview(slug: string) {
  return getFile(`reviews/${slug}`, reviewSchema);
}

export async function getNewsItem(slug: string) {
  return getFile(`news/${slug}`, newsSchema);
}


export async function getNews({
  limit = 6,
  page = 1,
  search,
}: FilesFilterOptions = {}) {
  const content = await getFiles('news', newsSchema);

  content.forEach((newsItem) => {
    newsItem.body = truncate(newsItem.body, { length: 200 });
  });

  const contentFiltered = filterContent(content, search);
  const contentPaginated = paginateContent(contentFiltered, page, limit);

  return contentPaginated;
}

export async function getReviews({
  limit = 6,
  page = 1,
  search,
}: FilesFilterOptions = {}) {
  const content = await getFiles('reviews', reviewSchema);

  const contentFiltered = filterContent(content, search);
  const contentPaginated = paginateContent(contentFiltered, page, limit);

  return contentPaginated;
}

export async function getReviewsFields(): Promise<ReviewFieldsList> {
  if (nodeCache.has('getReviewsFields')) return nodeCache.get('getReviewsFields') as Promise<ReviewFieldsList>;
  const reviews = await getFiles('reviews', reviewSchema);

  const result = reviews.reduce<ReviewFieldsList>((acc, review) => {
    if (!acc.genre.includes(review.genre)) acc.genre.push(review.genre);
    if (!acc.publisher.includes(review.publisher)) acc.publisher.push(review.publisher);
    if (!acc.developer.includes(review.developer)) acc.developer.push(review.developer);
    return acc;
  }, {
    genre: [],
    publisher: [],
    developer: [],
  });
  nodeCache.set('getReviewsFields', result);

  return result;
}
