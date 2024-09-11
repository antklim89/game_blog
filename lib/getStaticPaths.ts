import path from 'node:path';
import process from 'node:process';
import fs from 'fs-extra';
import chunk from 'lodash/chunk';
import times from 'lodash/times';
import type { ParsedUrlQuery } from 'node:querystring';
import { reviewFieldFilterNames } from '~/lib/constants';
import { getReviews, getReviewsFields } from './contentLoaders';


export const CONTENT_PATH = path.resolve(process.cwd(), 'public/content');

export interface ReviewsFilterFieldsParams extends ParsedUrlQuery {
  page: string;
  fieldValue: string;
  fieldName: string;
};

type ReviewsFilterPaths = {
  params: ReviewsFilterFieldsParams;
}[];


async function getPaths(filePath: string) {
  const files = await fs.readdir(path.join(CONTENT_PATH, filePath));

  const paths = files
    .filter(file => (/\.json$/i).test(file))
    .map(file => file.replace('.json', ''))
    .map(file => ({ params: { slug: file } }));

  return paths;
}


export async function getReviewsFilterPaths(limit: number = Number.MAX_SAFE_INTEGER) {
  const reviewFields = await getReviewsFields();

  const paths: ReviewsFilterPaths = [];

  await Promise.all(reviewFieldFilterNames.map(async (fieldName) => {
    return Promise.all(reviewFields[fieldName].map(async (fieldValue) => {
      const files = await getReviews({ search: { [fieldName]: fieldValue }, limit });

      return times(files.totalPages, (i) => {
        paths.push({
          params: {
            page: `${i + 1}`,
            fieldValue,
            fieldName,
          },
        });
      });
    }));
  }));

  return paths;
}


export async function getPagesPaths(limit: number, filesDir: string) {
  const files = await fs.readdir(path.join(CONTENT_PATH, filesDir));

  const paths = chunk(files, limit).map((_, index) => ({ params: { page: String(index + 1) } }));
  return paths;
}

export async function getReviewsPaths() {
  return getPaths('reviews');
}

export async function getNewsPaths() {
  return getPaths('news');
}
