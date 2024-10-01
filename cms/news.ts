import type { CmsCollection } from 'decap-cms-core';
import path from 'node:path';
import { baseContentFolder, baseMediaFolder, basePublicFolder } from './constants';


const name = 'news';

export const news: CmsCollection = {
  label: 'News',
  name,
  extension: 'json',
  folder: path.join(baseContentFolder, name),
  media_folder: path.join(baseMediaFolder, name),
  public_folder: path.join(basePublicFolder, name),
  create: true,
  editor: { preview: false },
  slug: '{{slug}}',
  fields: [
    {
      name: 'createdAt',
      widget: 'datetime',
      format: 'X',
      required: true,
    },
    {
      name: 'body',
      widget: 'markdown',
      required: true,
    },
    {
      name: 'title',
      widget: 'string',
      pattern: ['^.{5,500}$', 'The title must be between 5 and 500 letters long.'],
      required: true,
    },
    {
      name: 'publishedAt',
      widget: 'datetime',
    },
    {
      name: 'previewImage',
      widget: 'image',
      required: true,
    },
  ],
};
