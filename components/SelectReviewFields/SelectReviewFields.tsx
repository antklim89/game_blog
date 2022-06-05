import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { ChangeEventHandler, FC, useCallback } from 'react';

import { ReviewFields } from '~/types';
import { setSearchParams } from '~/utils';


const SELECT_GENRE = 'Select Genre';
const SELECT_PUBLISHER = 'Select Publisher';

const SelectReviewFields: FC<ReviewFields> = ({ genres, publishers }) => {
    const router = useRouter();

    const handleGenreSelect: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.target.value === SELECT_GENRE) {
            setSearchParams(router, 'genre', '');
            return;
        }
        setSearchParams(router, 'genre', e.target.value);
    }, [router.asPath]);

    const handlePublisherSelect: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.target.value === SELECT_PUBLISHER) {
            setSearchParams(router, 'publisher', '');
            return;
        }
        setSearchParams(router, 'publisher', e.target.value);
    }, [router.asPath]);

    return (
        <Box display="flex" my={[1, null, 4]}>
            <TextField
                select
                label={SELECT_GENRE}
                sx={{ mr: [1, null, 4] }}
                value={router.query.genre || SELECT_GENRE}
                onChange={handleGenreSelect}
            >
                <MenuItem value={SELECT_GENRE}>{SELECT_GENRE}</MenuItem>
                {genres.map((genre) => (
                    <MenuItem key={genre} value={genre}>{genre}</MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label={SELECT_PUBLISHER}
                sx={{ ml: [1, null, 4] }}
                value={router.query.publisher || SELECT_PUBLISHER}
                onChange={handlePublisherSelect}
            >
                <MenuItem value={SELECT_PUBLISHER}>{SELECT_PUBLISHER}</MenuItem>
                {publishers.map((publisher) => (
                    <MenuItem key={publisher} value={publisher}>{publisher}</MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

export default SelectReviewFields;


