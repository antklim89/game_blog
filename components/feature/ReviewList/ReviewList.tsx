import type { FC } from 'react';
import Grid from '@mui/material/Grid2';
import type { IReview } from '~/lib/types';
import ReviewListItem from './ReviewListItem';


const ReviewList: FC<{ reviews: IReview[] }> = async ({ reviews }) => {
  return (
    <Grid container spacing={1} sx={{ my: 4 }}>
      {reviews.map(review => (
        <ReviewListItem {...review} key={review.slug} />
      ))}
    </Grid>
  );
};

export default ReviewList;

