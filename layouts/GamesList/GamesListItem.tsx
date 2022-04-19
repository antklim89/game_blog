import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { FC } from 'react';

import { GamesListItemProps } from './GamesList.types';


const GamesListItem: FC<GamesListItemProps> = ({
    slug, title, previewImage, genre, publisher, year,
}) => {
    return (
        <Link passHref href={`/games/${slug}`} >
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
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                    }}
                    variant="outlined"
                >
                    <CardHeader subheader={year} subheaderTypographyProps={{ color: 'white' }} title={title} />
                    <CardContent>
                        <p>
                            Genre: {genre}
                        </p>
                        <p>
                            Published by {publisher}
                        </p>
                    </CardContent>
                </Card>
            </Grid>
        </Link>
    );
};

export default GamesListItem;

