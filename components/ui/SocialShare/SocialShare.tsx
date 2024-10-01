'use client';
import type { FC } from 'react';
import type { SocialShareProps } from './SocialShare.types';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
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
import { SITE_URL } from '~/lib/constants';


const SocialShare: FC<SocialShareProps> = ({ title, image }) => {
  const pathname = usePathname();

  return (
    <Box>
      <VKShareButton
        image={`${image}`}
        title={title}
        url={`${SITE_URL}${pathname}`}
      >
        <VKIcon />
      </VKShareButton>
      <EmailShareButton
        subject={title}
        url={`${SITE_URL}${pathname}`}
      >
        <EmailIcon />
      </EmailShareButton>
      <FacebookShareButton
        title={title}
        url={`${SITE_URL}${pathname}`}
      >
        <FacebookIcon />
      </FacebookShareButton>
      <RedditShareButton
        title={title}
        url={`${SITE_URL}${pathname}`}
      >
        <RedditIcon />
      </RedditShareButton>
    </Box>
  );
};

export default SocialShare;

