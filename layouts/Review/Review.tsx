import Typography from '@mui/material/Typography';
import { FC } from 'react';

import Markdown from '~/components/Markdown';
import { IReview } from '~/types';
import { formatDate } from '~/utils';


const Review: FC<IReview> = ({ body, genre, gameRelease, publisher, developer }) => {
    return (
        <article>
            <Typography sx={{ mb: 4 }}>
                <b>Genre:</b> {genre}<br />
                <b>Publisher:</b> {publisher}<br />
                <b>Developer:</b> {developer}<br />
                <b>Release:</b> {formatDate(gameRelease)}<br />
            </Typography>
            <Markdown>
                {body}
            </Markdown>
        </article>
    );
};

export default Review;

