import Box from '@mui/material/Box';
import PaginationMui from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';

import { setSearchParams } from '~/utils';

import { PaginationProps } from './Pagination.types';


const Pagination: FC<PaginationProps> = ({ totalPages }) => {
    const router = useRouter();
    const { query: { page } } = useRouter();
    const currentPage = typeof page === 'string' ? parseInt(page, 10) : 1;

    const handlePageSelect = useCallback((_: unknown, newPage: number) => {
        setSearchParams(router, 'page', newPage);
    }, [router.asPath]);

    return (
        <Box display="flex" justifyContent="center" my={[1, null, 4]}>
            <PaginationMui
                color="primary"
                count={totalPages}
                page={currentPage}
                shape="rounded"
                variant="outlined"
                onChange={handlePageSelect}
            />
        </Box>
    );
};

export default Pagination;

