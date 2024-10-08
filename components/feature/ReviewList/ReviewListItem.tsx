import Link from 'next/link';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import StaticImage from '~/components/ui/StaticImage';
import { formatDate } from '~/lib/utils';
import type { ReviewListItemProps } from './ReviewList.types';


const ReviewListItem: FC<ReviewListItemProps> = ({
  slug,
  title,
  previewImage,
  genre,
  publisher,
  gameRelease,
}) => {
  return (
    <Grid size={{ md: 6, sm: 12, xs: 12 }}>
      <Link href={`/review-item/${slug}`}>
        <Card
          sx={{
            'position': 'relative',
            'backgroundColor': 'transparent',
            'color': 'white',
            '& img': { transition: 'transform 200ms' },
            '&:hover img': { transform: 'scale(1.1)' },
          }}
          variant="outlined"
        >
          <CardHeader
            subheader={formatDate(gameRelease)}
            subheaderTypographyProps={{ color: 'white', variant: 'subtitle2' }}
            sx={{ p: [1, 2] }}
            title={title}
            titleTypographyProps={{ component: 'h4' }}
          />
          <CardContent sx={{ p: [1, 2] }}>
            <Typography>
              {genre}
            </Typography>
            <Typography>
              Released by
              {' '}
              {publisher}
            </Typography>
          </CardContent>
          <Box
            sx={{
              'position': 'absolute',
              'top': '-50%',
              'right': 0,
              'left': 0,
              'zIndex': -1,
              'filter': 'brightness(0.7)',
              '& img': { objectFit: 'cover', width: '100%', height: '100%' },
            }}
          >
            <StaticImage
              alt={title}
              height={720}
              src={previewImage}
              width={1280}
            />
          </Box>
        </Card>
      </Link>
    </Grid>
  );
};

export default ReviewListItem;

