import Typography from '@mui/material/Typography';
import { FC } from 'react';

import Markdown from '~/components/Markdown';
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
            <Markdown>{body}</Markdown>
        </article>
    );
};

export default NewsItem;

