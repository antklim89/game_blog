import path from 'node:path';
import type { CmsCollectionFile } from 'decap-cms-core';
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
          pattern: ['^.{5,200}$', 'The text must be between 5 and 200 letters long.'],
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
