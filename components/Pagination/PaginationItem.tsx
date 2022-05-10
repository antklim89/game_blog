import type { PaginationRenderItemParams } from '@mui/material';
import PaginationItemMui from '@mui/material/PaginationItem';
import Link from 'next/link';
import { FC } from 'react';


const PaginationItem: FC<PaginationRenderItemParams> = (item) => {
    return (
        <Link passHref href={`/news/${item.page === 1 ? '' : `page/${item.page}`}`}>
            <PaginationItemMui
                component="a"
                {...item}
            />
        </Link>
    );
};

export default PaginationItem;
