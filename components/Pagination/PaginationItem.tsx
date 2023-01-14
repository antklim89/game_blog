import PaginationItemMui from '@mui/material/PaginationItem';
import Link from 'next/link';
import { FC } from 'react';

import { PaginationItemProps } from './Pagination.types';


const PaginationItem: FC<PaginationItemProps> = (item) => {
    const href = typeof item.path === 'string'
        ? `${item.path}${item.page === 1 ? '' : `/page/${item.page}`}`
        : item.path(item.page || 1);

    return (
        <PaginationItemMui
            component={Link}
            href={href}
            {...item}
        />
    );
};

export default PaginationItem;
