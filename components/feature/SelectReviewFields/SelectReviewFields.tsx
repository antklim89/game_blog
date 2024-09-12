import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import type { FC } from 'react';
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
      {Object.entries(reviewFields).map(([fieldName, fieldOptions]: [string, ReviewFieldsList[keyof ReviewFieldsList] ]) => (
        <TextField
          fullWidth
          select
          key={fieldName}
          label={`Select ${fieldName}`}
          value={fieldSelectedValues[fieldName as keyof ReviewFieldsList]}
        >
          <MenuItem value="all">
            <Link href={createReviewsHref({ ...fieldSelectedValues, [fieldName]: 'all' })}>
              Select
              {' '}
              {fieldName}
            </Link>
          </MenuItem>
          {fieldOptions.map(fieldValue => (
            <MenuItem key={fieldValue} value={fieldValue}>
              <Link href={createReviewsHref({ ...fieldSelectedValues, [fieldName]: fieldValue })}>
                {fieldValue}
              </Link>
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
  return `/reviews/${publisher}/${developer}/${genre}/1`;
}

