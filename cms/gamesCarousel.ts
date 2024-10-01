import type { CmsCollectionFile } from 'decap-cms-core';
import path from 'node:path';
import { baseContentFolder, baseMediaFolder, basePublicFolder } from './constants';


const name = 'gamesCarousel';

export const gamesCarousel: CmsCollectionFile = {
  label: 'Games Carousel',
  name,
  file: path.join(baseContentFolder, `${name}.json`),
  media_folder: path.join(baseMediaFolder, name),
  public_folder: path.join(basePublicFolder, name),
  fields: [
    {
      name: 'items',
      widget: 'list',
      summary: '{{text}}',
      fields: [
        {
          name: 'image',
          widget: 'image',
          required: true,
        },
        {
          name: 'text',
          widget: 'string',
          required: true,
        },
        {
          name: 'link',
          widget: 'string',
        },
      ],
    },
  ],
};
