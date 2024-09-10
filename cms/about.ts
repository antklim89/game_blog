import type { CmsCollectionFile } from 'decap-cms-core';


export const about: CmsCollectionFile = {
  label: 'About',
  name: 'about',
  file: 'public/content/about/index.json',
  media_folder: 'images',
  public_folder: '/content/about/images',
  fields: [
    {
      name: 'text',
      widget: 'markdown',
    },
  ],
};
