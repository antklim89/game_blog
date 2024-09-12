import Grid from '@mui/material/Grid2';
import type { FC } from 'react';
import { getReviews } from '~/lib/contentLoaders';
import ReviewListItem from './ReviewsListItem';


const ReviewsList: FC = async () => {
  const reviews = await getReviews({ limit: 4 });

  return (
    <Grid container spacing={1} sx={{ my: 4 }}>
      {reviews.items.map(review => (
        <ReviewListItem {...review} key={review.slug} />
      ))}
    </Grid>
  );
};

export default ReviewsList;

