import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';

import { ReviewsListItemProps } from './ReviewsList.types';


const ReviewListItem: FC<ReviewsListItemProps> = ({
    slug, title, previewImage, genre, publisher, year,
}) => {
    return (
        <Link passHref href={`/reviews/${slug}`} >
            <Grid
                item
                component="a"
                sm={6}
                xs={12}
            >
                <Card
                    sx={{
                        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), URL(${previewImage})`,
                        backgroundColor: 'none',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                        color: 'white',
                        transition: '100ms',
                        ':hover': { backgroundSize: '105%' },
                    }}
                    variant="outlined"
                >
                    <CardHeader
                        subheader={`${year} year`}
                        subheaderTypographyProps={{ color: 'white', variant: 'subtitle2' }}
                        title={title}
                        titleTypographyProps={{ variant: 'h3', component: 'h4', color: 'white' }}
                    />
                    <CardContent>
                        <Typography>
                            Genre: {genre}
                        </Typography>
                        <Typography>
                            Published by {publisher}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Link>
    );
};

export default ReviewListItem;

