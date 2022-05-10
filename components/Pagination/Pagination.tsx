import Box from '@mui/material/Box';
import PaginationMui from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { PaginationProps } from './Pagination.types';
import PaginationItem from './PaginationItem';


const Pagination: FC<PaginationProps> = ({ totalPages }) => {
    const { query: { page } } = useRouter();
    const currentPage = typeof page === 'string' ? parseInt(page, 10) : 1;

    return (
        <Box display="flex" justifyContent="center">
            <PaginationMui
                color="primary"
                count={totalPages}
                page={currentPage}
                renderItem={PaginationItem}
                shape="rounded"
                variant="outlined"
            />
        </Box>
    );
};

export default Pagination;

