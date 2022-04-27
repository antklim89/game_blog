/* eslint-disable */
import type { CmsCollectionFile } from 'netlify-cms-core'



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
                },
                {
                    name: 'text',
                    widget: 'string'
                }
            ]
        }
    ],
}