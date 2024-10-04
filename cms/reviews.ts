import type { CmsCollection } from 'decap-cms-core';
import path from 'node:path';
import { baseContentFolder, baseMediaFolder, basePublicFolder } from './constants';


const name = 'reviews';

export const reviews: CmsCollection = {
  label: 'Reviews',
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
      name: 'body',
      widget: 'markdown',
      required: true,
    },
    {
      name: 'createdAt',
      widget: 'datetime',
      required: true,
    },
    {
      name: 'title',
      widget: 'string',
      pattern: ['^.{5,200}$', 'The title must be between 5 and 500 letters long.'],
      required: true,
    },
    {
      name: 'genre',
      widget: 'string',
      pattern: ['^.{2,200}$', 'The genre must be between 2 and 200 letters long.'],
      required: true,
    },
    {
      name: 'publisher',
      widget: 'string',
      pattern: ['^.{5,200}$', 'The publisher must be between 5 and 200 letters long.'],
      required: true,
    },
    {
      name: 'developer',
      widget: 'string',
      pattern: ['^.{5,200}$', 'The developer must be between 5 and 200 letters long.'],
      required: true,
    },
    {
      name: 'gameRelease',
      widget: 'datetime',
      required: true,
    },
    {
      name: 'previewImage',
      widget: 'image',
      required: true,
    },
  ],
};
