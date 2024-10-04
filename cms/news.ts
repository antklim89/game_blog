import path from 'node:path';
import type { CmsCollection } from 'decap-cms-core';
import {
  baseContentFolder,
  baseMediaFolder,
  basePublicFolder,
  hiddenField,
} from './constants';


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
    hiddenField,
    {
      name: 'body',
      widget: 'markdown',
      required: true,
    },
    {
      name: 'title',
      widget: 'string',
      pattern: ['^.{5,200}$', 'The title must be between 5 and 200 letters long.'],
      required: true,
    },
    {
      name: 'publishedAt',
      widget: 'datetime',
      required: true,
    },
    {
      name: 'previewText',
      pattern: ['^.{5,2000}$', 'The previewText must be between 5 and 2000 letters long.'],
      widget: 'text',
      required: false,
    },
    {
      name: 'previewImage',
      widget: 'image',
      required: true,
    },
  ],
};
