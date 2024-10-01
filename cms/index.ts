import type { CmsBackend, InitOptions } from 'decap-cms-core';
import { REPOSITORY_URL, SITE_URL } from '~/lib/constants';
import { about } from './about';
import { baseMediaFolder, basePublicFolder } from './constants';
import { gamesCarousel } from './gamesCarousel';
import { news } from './news';
import { reviews } from './reviews';
import { topHeader } from './topHeader';


const URL_HOSTNAME = new URL(process.env.URL ?? 'http://localhost:3000').hostname;

const backend: CmsBackend
  = process.env.NETLIFY === 'true'
    ? {
        name: 'git-gateway',
        branch: 'main',
      }
    : {
        name: 'github',
        repo: REPOSITORY_URL,
        branch: 'main',
      };


export const cmsConfig: InitOptions = {
  config: {
    load_config_file: false,

    site_url: SITE_URL,

    backend,

    local_backend: {
      url: `http://${URL_HOSTNAME}:8081/api/v1`,
      allowed_hosts: [URL_HOSTNAME],
    },

    publish_mode: 'editorial_workflow',

    media_folder: baseMediaFolder,
    public_folder: basePublicFolder,

    collections: [
      reviews,
      news,
      {
        label: 'Site',
        name: 'site',
        editor: { preview: false },
        files: [
          about,
          topHeader,
          gamesCarousel,
        ],
      },
    ],
  },
};
