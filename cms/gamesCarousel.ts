import type { CmsCollectionFile } from 'decap-cms-core';


export const gamesCarousel: CmsCollectionFile = {
  label: 'Games Carousel',
  name: 'gamesCarousel',
  file: 'public/content/gamesCarousel/index.json',
  media_folder: 'images',
  public_folder: '/content/gamesCarousel/images',
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
