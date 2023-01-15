import Box from '@mui/material/Box';
import PaginationMui from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';


import { PaginationProps } from './Pagination.types';


const Pagination: FC<PaginationProps> = ({ totalPages }) => {
    const router = useRouter();
    const { query: { page } } = useRouter();
    const currentPage = typeof page === 'string' ? parseInt(page, 10) : 1;

    const handlePageSelect = useCallback((_: unknown, newPage: number) => {
        const newPath = (router.pathname.endsWith('[page]'))
            ? router.asPath.replace(/\/page\/\d+$/, `/page/${newPage}`)
            : `${router.pathname}/page/${newPage}`;

        router.push(newPath);
    }, [router.asPath]);

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
                shape="rounded"
                sx={{ '& ul': { flexWrap: 'nowrap' } }}
                variant="outlined"
                onChange={handlePageSelect}
            />
        </Box>
    );
};

export default Pagination;

