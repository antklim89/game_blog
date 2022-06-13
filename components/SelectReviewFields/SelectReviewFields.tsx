import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { ChangeEventHandler, FC, useCallback } from 'react';

import { ReviewFields } from '~/types';


const SELECT_GENRE = 'Select Genre';
const SELECT_PUBLISHER = 'Select Publisher';
const SELECT_DEVELOPER = 'Select Developer';

const SelectReviewFields: FC<ReviewFields> = ({ genres, publishers, developers }) => {
    const router = useRouter();

    const handleFieldSelect: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const newPath = e.target.value === SELECT_GENRE
            ? '/reviews'
            : `/reviews/genre/${e.target.value}/page/1`;
        router.push(newPath);
    }, [router.asPath]);

    const handlePublisherSelect: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const newPath = e.target.value === SELECT_PUBLISHER
            ? '/reviews'
            : `/reviews/publisher/${e.target.value}/page/1`;
        router.push(newPath);
    }, [router.asPath]);

    const handleDeveloperSelect: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const newPath = e.target.value === SELECT_DEVELOPER
            ? '/reviews'
            : `/reviews/developer/${e.target.value}/page/1`;
        router.push(newPath);
    }, [router.asPath]);

    return (
        <Box display="flex" my={[1, null, 4]}>
            <TextField
                select
                label={SELECT_GENRE}
                sx={{ mr: [1, null, 4] }}
                value={router.query.genre || SELECT_GENRE}
                onChange={handleFieldSelect}
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
            <TextField
                select
                label={SELECT_DEVELOPER}
                sx={{ ml: [1, null, 4] }}
                value={router.query.developer || SELECT_DEVELOPER}
                onChange={handleDeveloperSelect}
            >
                <MenuItem value={SELECT_DEVELOPER}>{SELECT_DEVELOPER}</MenuItem>
                {developers.map((developer) => (
                    <MenuItem key={developer} value={developer}>{developer}</MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

export default SelectReviewFields;


