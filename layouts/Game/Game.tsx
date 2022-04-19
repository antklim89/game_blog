import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { IGame } from '~/types';


const Game: FC<IGame> = ({ body, title, genre, year, publisher }) => {
    return (
        <article>
            <Typography variant="h1">
                {title}
            </Typography>
            <Typography component="h5" sx={{ mb: 4 }} variant="h5">
                {genre} released by {publisher} in {year} year
            </Typography>
            <Box dangerouslySetInnerHTML={{ __html: body }} />
        </article>
    );
};

export default Game;

