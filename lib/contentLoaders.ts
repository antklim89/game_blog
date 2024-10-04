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
import type { FilesFilterOptions, ReviewFieldsList } from './types';


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
  const result = await getFile(`reviews/${slug}`, reviewSchema);
  if (result.hidden === true) return null;
  return result;
}

export async function getNewsItem(slug: string) {
  const result = await getFile(`news/${slug}`, newsSchema);
  if (result.hidden === true) return null;
  return result;
}


export async function getNews({
  limit = 6,
  page = 1,
  search,
}: FilesFilterOptions = {}) {
  let content = await getFiles('news', newsSchema);

  content = content.filter(i => i.hidden !== true);
  content = filterContent(content, search);
  content = content.toSorted((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const contentPaginated = paginateContent(content, page, limit);

  return contentPaginated;
}

export async function getReviews({
  limit = 6,
  page = 1,
  search,
}: FilesFilterOptions = {}) {
  let content = await getFiles('reviews', reviewSchema);

  content = content.filter(i => i.hidden !== true);
  content = filterContent(content, search);
  content = content.toSorted((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const contentPaginated = paginateContent(content, page, limit);

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
