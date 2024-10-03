import type { ReviewFieldsNames } from './types';


export const DEFAULT_DESCRIPTION = process.env.DEFAULT_DESCRIPTION ?? 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores id nulla fugiat eius nostrum tempore alias illum deleniti, recusandae eligendi consectetur, dolor quisquam. Quibusdam eligendi at corrupti distinctio magnam voluptas quisquam repellat voluptatibus laudantium asperiores! Rerum error non, expedita amet repudiandae nisi incidunt, odit nostrum quo illum, perferendis commodi.';
export const DEFAULT_TITLE = process.env.DEFAULT_TITLE ?? 'Game Blog';

export const reviewFieldFilterNames: ReviewFieldsNames[] = ['developer', 'publisher', 'genre'];

export const defaultBlurDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8MlGqHgAFwAIAnnxXJwAAAABJRU5ErkJggg==';

export const SITE_URL = process.env.URL ?? 'http://localhost:3000';
export const REPOSITORY_URL = process.env.REPOSITORY_URL;
