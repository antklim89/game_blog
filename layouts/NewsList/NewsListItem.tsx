import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { FC } from 'react';

import Image from '~/components/Image';
import Markdown from '~/components/Markdown';

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
                            src={previewImage}
                            width={128}
                        />
                    </ListItemAvatar>
                    <Box>
                        <ListItemText
                            primary={title}
                            primaryTypographyProps={{ variant: 'h4', component: 'h4', color: 'primary' }}
                            secondary={publishedAt}
                        />
                        <Markdown>
                            {body}
                        </Markdown>
                    </Box>
                </ListItem>
            </Link>
            <Divider component="li" variant="inset" />
        </>
    );
};

export default NewsListItem;
