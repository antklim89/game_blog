'use client';
import Link from 'next/link';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import PaginationMui from '@mui/material/Pagination';
import PaginationItemMui from '@mui/material/PaginationItem';
import type { PaginationProps } from './Pagination.types';


const Pagination: FC<PaginationProps> = ({ currentPage, path, totalPages }) => {
  if (totalPages <= 1) return null;

  return (
    <Box
      display="flex"
      flexWrap="nowrap"
      justifyContent="center"
      my={[1, null, 4]}
    >
      <PaginationMui
        color="primary"
        count={totalPages}
        page={currentPage}
        renderItem={({ page, onClick: _, ...item }) => (
          <PaginationItemMui
            component={Link}
            href={`${path}/${(page ?? 1).toString()}`}
            page={page}
            scroll={false}
            {...item}
          />
        )}
        shape="rounded"
        siblingCount={2}
        sx={{ '& ul': { flexWrap: 'nowrap' } }}
        variant="outlined"
      />
    </Box>
  );
};

export default Pagination;
