/* eslint-disable */
import type { CmsCollection } from 'netlify-cms-core'



export const news: CmsCollection = {
    label: 'News',
    name: 'news',
    folder: 'public/content/news',
    extension: 'json',
    media_folder: 'images',
    public_folder: '/content/news/images',
    create: true,
    editor: { preview: false },
    slug: '{{year}}{{month}}{{day}}{{hour}}{{minute}}{{second}}-{{slug}}',
    fields: [
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
}
