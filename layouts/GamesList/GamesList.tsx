import Grid from '@mui/material/Grid';
import { FC } from 'react';

import { GamesListProps } from './GamesList.types';
import GamesListItem from './GamesListItem';


const GamesList: FC<GamesListProps> = ({ games }) => {
    return (
        <Grid container spacing={1} sx={{ my: 4 }}>
            {games.map((game) => (
                <GamesListItem {...game} key={game.slug} />
            ))}
        </Grid>
    );
};

export default GamesList;

