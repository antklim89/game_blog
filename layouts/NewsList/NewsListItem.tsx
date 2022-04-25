import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { NewsListItemProps } from './NewsList.types';


const NewsListItem: FC<NewsListItemProps> = ({ title, publishedAt, slug, body, previewImage }) => {

    return (
        <>

            <Link passHref href={`/news/${slug}`}>
                <ListItem component="a" sx={{ alignItems: 'flex-start', flexDirection: 'column' }}>
                    {/* <ListItemAvatar>
                        <Image
                            alt="title"
                            height={3400}
                            src="http://192.168.90.19:3000/content/news/images/exiter23.jpg"
                            width={3400}
                        />
                    </ListItemAvatar> */}
                    <ListItemText
                        primary={title}
                        primaryTypographyProps={{ variant: 'h4', component: 'h4' }}
                        secondary={publishedAt}
                    />
                    <ListItemText
                        primary={body.slice(0, 200)}
                    />
                </ListItem>
            </Link>
            <Divider component="li" variant="inset" />
        </>
    );
};

export default NewsListItem;
