import List from '@mui/material/List';
import { FC } from 'react';

import { NewsListProps } from './NewsList.types';
import NewsListItem from './NewsListItem';


const NewsList: FC<NewsListProps> = ({ news }) => {
    return (
        <List>
            {news.map((newsItem) => (
                <NewsListItem {...newsItem} key={newsItem.title} />
            ))}
        </List>
    );
};

export default NewsList;

