import Typography from '@mui/material/Typography';
import type { FC } from 'react';
import Markdown from '~/components/ui/Markdown';
import SocialShare from '~/components/ui/SocialShare';
import type { INews } from '~/lib/types';
import { formatDate } from '~/lib/utils';


const NewsItem: FC<INews> = ({
  title,
  body,
  publishedAt,
  previewImage,
}) => {
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

