import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { ChangeEventHandler, FC, useCallback } from 'react';

import { reviewFieldFilterNames } from '~/constants';
import { ReviewFieldsList } from '~/types';


const SelectReviewFields: FC<ReviewFieldsList> = (props) => {
    const router = useRouter();

    const handleFieldSelect: (fieldName: string) => ChangeEventHandler<HTMLInputElement> = useCallback(
        (fieldName) => (e) => {
            const newPath = e.target.value === `Select ${fieldName}`
                ? '/reviews'
                : `/reviews/search/${fieldName}/${e.target.value}/page/1`;
            router.push(newPath);
        },
        [router.asPath],
    );

    return (
        <Box display="flex" my={[1, null, 4]}>
            {reviewFieldFilterNames.map((fieldName) => (
                <TextField
                    select
                    key={fieldName}
                    label={`Select ${fieldName}`}
                    sx={{ mr: [1, null, 4] }}
                    value={fieldName === router.query.fieldName ? router.query.fieldValue : `Select ${fieldName}`}
                    onChange={handleFieldSelect(fieldName)}
                >
                    <MenuItem value={`Select ${fieldName}`}>{`Select ${fieldName}`}</MenuItem>
                    {props[fieldName].map((fieldValue) => (
                        <MenuItem key={fieldValue} value={fieldValue}>{fieldValue}</MenuItem>
                    ))}
                </TextField>
            ))}
        </Box>
    );
};

export default SelectReviewFields;


