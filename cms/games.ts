/* eslint-disable */
import type { CmsCollection } from 'netlify-cms-core'



export const games: CmsCollection = {
    label: 'Games',
    name: 'games',
    folder: 'public/content/games',
    extension: 'json',
    media_folder: 'images',
    public_folder: '/content/games/images',
    create: true,
    editor: { preview: false },
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
            name: 'genre',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The link must be between 5 and 500 letters long.'],
            required: true,
        },
        {
            name: 'publisher',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The link must be between 5 and 500 letters long.'],
            required: true,
        },
        {
            name: 'year',
            widget: 'number',
            required: true,
        },
        {
            name: 'previewImage',
            widget: 'image',
            required: true,
        },
    ],
}
