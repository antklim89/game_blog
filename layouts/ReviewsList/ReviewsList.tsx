import Grid from '@mui/material/Grid';
import type { FC } from 'react';

import ReviewListItem from './ReviewsListItem';
import type { ReviewsListProps } from './ReviewsList.types';


const ReviewsList: FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <Grid container spacing={1} sx={{ my: 4 }}>
      {reviews.map(review => (
        <ReviewListItem {...review} key={review.slug} />
      ))}
    </Grid>
  );
};

export default ReviewsList;

