import PaginationItemMui from '@mui/material/PaginationItem';
import Link from 'next/link';
import type { FC } from 'react';

import type { PaginationItemProps } from './Pagination.types';


const PaginationItem: FC<PaginationItemProps> = ({ path, page, ...props }) => {
  const href = typeof path === 'string'
    ? `${path}${page === 1 ? '' : `/page/${page ?? '0'}`}`
    : path(page ?? 1);

  return (
    <PaginationItemMui
      component={Link}
      href={href}
      {...props}
      page={page}
    />
  );
};

export default PaginationItem;
