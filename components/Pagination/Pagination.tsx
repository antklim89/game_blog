import Box from '@mui/material/Box';
import PaginationMui from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { PaginationProps } from './Pagination.types';
import PaginationItem from './PaginationItem';


const Pagination: FC<PaginationProps> = ({ totalPages, path }) => {
    const { query: { page } } = useRouter();
    const currentPage = typeof page === 'string' ? parseInt(page, 10) : 1;

    return (
        <Box display="flex" justifyContent="center">
            <PaginationMui
                color="primary"
                count={totalPages}
                page={currentPage}
                renderItem={(item) => <PaginationItem {...item} path={path} />}
                shape="rounded"
                variant="outlined"
            />
        </Box>
    );
};

export default Pagination;

