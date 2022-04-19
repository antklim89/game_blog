import { FC } from 'react';

import { IGame } from '~/types';


const Game: FC<IGame> = ({ body }) => {
    return (
        <div>
            {body}
        </div>
    );
};

export default Game;

