
import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import GamesList from '~/layouts/GamesList';
import { IGame } from '~/types';
import { getGames } from '~/utils';


interface Props {
    games: IGame[];
}

const GamesPage: NextPage<Props> = ({ games }) => {
    return (
        <>
            <Seo title="Games" />
            <Container>
                <GamesList games={games} />
            </Container>
        </>
    );
};

export default GamesPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const games = await getGames();

    return { props: { games } };
};

