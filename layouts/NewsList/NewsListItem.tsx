import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FC } from 'react';

import { NewsListItemProps } from './NewsList.types';


const NewsListItem: FC<NewsListItemProps> = ({ title }) => {
    return (
        <ListItem key={title}>
            <ListItemText>
                {title}
            </ListItemText>
        </ListItem>
    );
};

export default NewsListItem;
