import type { FC } from 'react';
import type { NewsListItemProps } from './NewsList.types';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import StaticImage from '~/components/ui/StaticImage';
import { formatDate } from '~/lib/utils';


const NewsListItem: FC<NewsListItemProps> = ({
  title,
  publishedAt,
  slug,
  previewImage,
  previewText,
}) => {
  return (
    <>
      <ListItem component={Link} href={`/news-item/${slug}`}>
        <ListItemAvatar sx={{ display: ['none', 'block'], mr: 4 }}>
          <StaticImage
            alt="title"
            height={128}
            src={previewImage}
            width={128}
          />
        </ListItemAvatar>
        <Box display="flex" flexDirection="column">
          <ListItemText
            primary={title}
            primaryTypographyProps={{ variant: 'h4', component: 'h4', color: 'primary' }}
            secondary={formatDate(publishedAt)}
          />
          <Typography>
            {previewText}
          </Typography>
        </Box>
      </ListItem>
      <Divider component="li" variant="inset" />
    </>
  );
};

export default NewsListItem;

