import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { type ChangeEventHandler, type FC, useCallback } from 'react';
import type { ReviewFieldsList } from '~/lib/types';


const SelectReviewFields: FC<ReviewFieldsList> = (props) => {
  const router = useRouter();

  const handleFieldSelect: (fieldName: string) => ChangeEventHandler<HTMLInputElement> = useCallback(
    fieldName => async (e) => {
      const newPath = e.target.value === `Select ${fieldName}`
        ? '/reviews'
        : `/reviews/search/${fieldName}/${e.target.value}/page/1`;
      await router.push(newPath);
    },
    [router],
  );

  return (
    <Box display="flex" flexDirection={['column', 'row']} width="100%">
      {Object.entries(props).map(([fieldName, value]: [string, ReviewFieldsList[keyof ReviewFieldsList] ]) => (
        <TextField
          fullWidth
          select
          key={fieldName}
          label={`Select ${fieldName}`}
          sx={{ mr: [1, null, 4], my: [1, null, 4] }}
          value={fieldName === router.query.fieldName ? router.query.fieldValue : `Select ${fieldName}`}
          onChange={handleFieldSelect(fieldName)}
        >
          <MenuItem value={`Select ${fieldName}`}>{`Select ${fieldName}`}</MenuItem>
          {value.map(fieldValue => (
            <MenuItem key={fieldValue} value={fieldValue}>{fieldValue}</MenuItem>
          ))}
        </TextField>
      ))}
    </Box>
  );
};

export default SelectReviewFields;


