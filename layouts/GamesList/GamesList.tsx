import Grid from '@mui/material/Grid';
import { FC } from 'react';

import { GamesListProps } from './GamesList.types';
import GamesListItem from './GamesListItem';


export const MOCK_LIST = [
    {
        id: '1',
        name: 'World Of Warcraft',
        genre: 'MMORPG',
        publisher: 'Blizzard',
        year: '2008',
        previewImage: '/placeholder.jpg',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis vel repudiandae voluptates ipsam beatae sed voluptatum quia ipsa impedit. Similique.',
    },
    {
        id: '2',
        name: 'World Of Warcraft',
        genre: 'MMORPG',
        publisher: 'Blizzard',
        year: '2008',
        previewImage: '/placeholder.jpg',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis vel repudiandae voluptates ipsam beatae sed voluptatum quia ipsa impedit. Similique.',
    },
    {
        id: '3',
        name: 'World Of Warcraft',
        genre: 'MMORPG',
        publisher: 'Blizzard',
        year: '2008',
        previewImage: '/placeholder.jpg',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis vel repudiandae voluptates ipsam beatae sed voluptatum quia ipsa impedit. Similique.',
    },
    {
        id: '4',
        name: 'World Of Warcraft',
        genre: 'MMORPG',
        publisher: 'Blizzard',
        year: '2008',
        previewImage: '/placeholder.jpg',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis vel repudiandae voluptates ipsam beatae sed voluptatum quia ipsa impedit. Similique.',
    },
];

const GamesList: FC<GamesListProps> = () => {
    return (
        <Grid container spacing={1} sx={{ my: 4 }}>
            {MOCK_LIST.map((game) => (
                <GamesListItem {...game} key={game.id} />
            ))}
        </Grid>
    );
};

export default GamesList;

