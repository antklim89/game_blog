import Typography from '@mui/material/Typography';
import { FC } from 'react';

import Markdown from '~/components/Markdown';
import { IReview } from '~/types';


const Review: FC<IReview> = ({ body, genre, year, publisher }) => {
    return (
        <article>
            <Typography component="h5" sx={{ mb: 4 }} variant="h5">
                {genre} released by {publisher} in {year} year
            </Typography>
            <Markdown>
                {body}
            </Markdown>
        </article>
    );
};

export default Review;

