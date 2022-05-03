import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { fromNow } from '~/utils';

import { NewsListItemProps } from './NewsList.types';


const NewsListItem: FC<NewsListItemProps> = ({ title, publishedAt, slug, body, previewImage }) => {
    return (
        <>

            <Link passHref href={`/news/${slug}`}>
                <ListItem component="a">
                    <ListItemAvatar sx={{ display: ['none', 'block'], mr: 4 }}>
                        <Image
                            alt="title"
                            height={128}
                            src={`http://localhost:3000${previewImage}`}
                            width={128}
                        />
                    </ListItemAvatar>
                    <Box>
                        <ListItemText
                            primary={title}
                            primaryTypographyProps={{ variant: 'h4', component: 'h4', color: 'primary' }}
                            secondary={fromNow(publishedAt)}
                        />
                        <div dangerouslySetInnerHTML={{ __html: body }} />
                    </Box>
                </ListItem>
            </Link>
            <Divider component="li" variant="inset" />
        </>
    );
};

export default NewsListItem;
