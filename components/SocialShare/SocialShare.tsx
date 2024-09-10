import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  VKIcon,
  VKShareButton,
} from 'react-share';
import type { FC } from 'react';

import { SITE_URL } from '~/constants';

import type { SocialShareProps } from './SocialShare.types';


const SocialShare: FC<SocialShareProps> = ({ title, image }) => {
  const { asPath } = useRouter();

  return (
    <Box>
      <VKShareButton
        image={`${image}`}
        title={title}
        url={`${SITE_URL}${asPath}`}
      >
        <VKIcon />
      </VKShareButton>
      <EmailShareButton
        subject={title}
        url={`${SITE_URL}${asPath}`}
      >
        <EmailIcon />
      </EmailShareButton>
      <FacebookShareButton
        title={title}
        url={`${SITE_URL}${asPath}`}
      >
        <FacebookIcon />
      </FacebookShareButton>
      <RedditShareButton
        title={title}
        url={`${SITE_URL}${asPath}`}
      >
        <RedditIcon />
      </RedditShareButton>
    </Box>
  );
};

export default SocialShare;

