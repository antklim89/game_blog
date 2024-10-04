import Link from 'next/link';
import type { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { getReviewsFields } from '~/lib/contentLoaders';
import type { ReviewFieldsList } from '~/lib/types';
import type { SelectReviewFieldsProps } from './SelectReviewFields.types';


const SelectReviewFields: FC<SelectReviewFieldsProps> = async ({
  publisher = 'all',
  developer = 'all',
  genre = 'all',
}) => {
  const reviewFields = await getReviewsFields();
  const fieldSelectedValues = { developer, genre, publisher } as const;

  return (
    <Box
      display="flex"
      flexDirection={['column', 'row']}
      gap={2}
      width="100%"
    >
      {Object
        .entries(reviewFields)
        .map(([fieldName, fieldOptions]: [string, ReviewFieldsList[keyof ReviewFieldsList] ]) => (
          <TextField
            fullWidth
            select
            key={fieldName}
            label={`Select ${fieldName}`}
            slotProps={{
              input: { endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    component={Link}
                    href={createReviewsHref({ ...fieldSelectedValues, [fieldName]: 'all' })}
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ) },
            }}
            value={fieldSelectedValues[fieldName as keyof ReviewFieldsList]}
          >
            {/** @ts-expect-error component prop exists */}
            <MenuItem
              component={Link}
              href={createReviewsHref({ ...fieldSelectedValues, [fieldName]: 'all' })}
              value="all"
            >
              Select {fieldName}
            </MenuItem>
            {fieldOptions.map(fieldValue => (
              // @ts-expect-error component prop exists
              <MenuItem
                component={Link}
                href={createReviewsHref({ ...fieldSelectedValues, [fieldName]: fieldValue })}
                key={fieldValue}
                value={fieldValue}
              >
                {fieldValue}
              </MenuItem>
            ))}
          </TextField>
        ))}
    </Box>
  );
};

export default SelectReviewFields;

function createReviewsHref({
  publisher,
  developer,
  genre,
}: {
  publisher: string;
  developer: string;
  genre: string;
}): string {
  return `/review-list/${publisher}/${developer}/${genre}/1`;
}

