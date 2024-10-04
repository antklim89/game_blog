import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Markdown from '~/components/ui/Markdown';
import SocialShare from '~/components/ui/SocialShare';
import { formatDate } from '~/lib/utils';
import type { ReviewProps } from './Review.types';


const Review: FC<ReviewProps> = ({ review }) => {
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
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography color="primary" component="h1" variant="h2">
          {title}
        </Typography>
        <Box display="flex" flexDirection={['column', 'row-reverse']} justifyContent="space-between">
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
      </Box>
      <Markdown>
        {body}
      </Markdown>
    </article>
  );
};

export default Review;

