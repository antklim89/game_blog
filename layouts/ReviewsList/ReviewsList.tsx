import Grid from '@mui/material/Grid';
import { FC } from 'react';

import { ReviewsListProps } from './ReviewsList.types';
import ReviewListItem from './ReviewsListItem';


const ReviewsList: FC<ReviewsListProps> = ({ reviews }) => {
    return (
        <Grid container spacing={1} sx={{ my: 4 }}>
            {reviews.map((review) => (
                <ReviewListItem {...review} key={review.slug} />
            ))}
        </Grid>
    );
};

export default ReviewsList;

