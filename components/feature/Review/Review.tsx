import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';
import Markdown from '~/components/ui/Markdown';
import SocialShare from '~/components/ui/SocialShare';
import type { IReview } from '~/lib/types';
import { formatDate } from '~/lib/utils';


const Review: FC<{ review: IReview }> = ({ review }) => {
  const {
    body,
    genre,
    gameRelease,
    publisher,
    developer,
    title,
    previewImage,
  } = review;

  return (
    <article>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'column', md: 'row-reverse' }}
        justifyContent="space-between"
      >
        <SocialShare image={previewImage} title={title} />
        <Typography sx={{ mb: 4 }}>
          <b>Genre:</b>
          {' '}
          {genre}
          <br />
          <b>Publisher:</b>
          {' '}
          {publisher}
          <br />
          <b>Developer:</b>
          {' '}
          {developer}
          <br />
          <b>Release:</b>
          {' '}
          {formatDate(gameRelease)}
          <br />
        </Typography>
      </Box>
      <Markdown>
        {body}
      </Markdown>
    </article>
  );
};

export default Review;

