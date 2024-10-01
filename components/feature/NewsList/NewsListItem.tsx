import type { FC } from 'react';
import type { NewsListItemProps } from './NewsList.types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Image from '~/components/ui/Image';
import { formatDate } from '~/lib/utils';


const NewsListItem: FC<NewsListItemProps> = ({
  title,
  publishedAt,
  slug,
  previewImage,
}) => {
  return (
    <>
      <ListItem component={Link} href={`/news-item/${slug}`}>
        <ListItemAvatar sx={{ display: ['none', 'block'], mr: 4 }}>
          <Image
            alt="title"
            height={128}
            src={previewImage}
            width={128}
          />
        </ListItemAvatar>
        <Box>
          <ListItemText
            primary={title}
            primaryTypographyProps={{ variant: 'h4', component: 'h4', color: 'primary' }}
            secondary={formatDate(publishedAt)}
          />
        </Box>
      </ListItem>
      <Divider component="li" variant="inset" />
    </>
  );
};

export default NewsListItem;
