import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Markdown from '~/components/ui/Markdown';
import SocialShare from '~/components/ui/SocialShare';
import { formatDate } from '~/lib/utils';
import type { NewsItemProps } from './NewsItem.types';


const NewsItem: FC<NewsItemProps> = ({ newsItem }) => {
  const {
    title,
    body,
    publishedAt,
    previewImage,
  } = newsItem;

  return (
    <article>
      <Typography color="primary" variant="h1">
        {title}
      </Typography>
      <SocialShare image={previewImage} title={title} />
      <Typography sx={{ mb: 4 }} variant="subtitle1">
        {formatDate(publishedAt)}
      </Typography>
      <Markdown>{body}</Markdown>
    </article>
  );
};

export default NewsItem;

