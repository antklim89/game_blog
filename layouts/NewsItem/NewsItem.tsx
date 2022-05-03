import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { INews } from '~/types';


const NewsItem: FC<INews> = ({ title, body, publishedAt }) => {
    return (
        <article>
            <Typography color="primary" variant="h1">
                {title}
            </Typography>
            <Typography sx={{ mb: 4 }} variant="subtitle1">
                {publishedAt}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </article>
    );
};

export default NewsItem;

