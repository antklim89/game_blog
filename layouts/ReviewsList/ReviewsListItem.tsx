import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';

import Image from '~/components/Image';

import { ReviewsListItemProps } from './ReviewsList.types';


const ReviewListItem: FC<ReviewsListItemProps> = ({
    slug, title, previewImage, genre, publisher, gameRelease,
}) => {
    return (
        <Link href={`/reviews/${slug}`} >
            <Grid
                item
                md={6}
                sm={12}
                xs={12}
            >
                <Card
                    sx={{
                        position: 'relative',
                        backgroundColor: 'transparent',
                        color: 'white',
                        '& img': { transition: 'transform 200ms' },
                        '&:hover img': { transform: 'scale(1.1)' },
                    }}
                    variant="outlined"
                >
                    <CardHeader
                        subheader={new Date(gameRelease).toLocaleDateString()}
                        subheaderTypographyProps={{ color: 'white', variant: 'subtitle2' }}
                        sx={{ p: [1, 2] }}
                        title={title}
                        titleTypographyProps={{ variant: 'h4', component: 'h4', whiteSpace: 'nowrap' }}
                    />
                    <CardContent sx={{ p: [1, 2] }}>
                        <Typography>
                            {genre}
                        </Typography>
                        <Typography>
                            Released by {publisher}
                        </Typography>
                    </CardContent>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                            zIndex: -1,
                            filter: 'brightness(0.7)',
                        }}
                    >
                        <Image
                            alt={title}
                            height={720}
                            // objectFit="cover"
                            src={previewImage}
                            width={1280}
                        />
                    </Box>
                </Card>
            </Grid>
        </Link>
    );
};

export default ReviewListItem;

