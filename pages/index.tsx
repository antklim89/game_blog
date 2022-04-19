import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import GamesCarousel from '~/components/GamesCarousel';
import Seo from '~/components/Seo';
import GamesList from '~/layouts/GamesList';
import { IGame } from '~/types';
import { getGames } from '~/utils';


interface Props {
    games: IGame[];
}


const Home: NextPage<Props> = ({ games }) => {
    return (
        <>
            <Seo title="Home" />
            <Container>
                <GamesCarousel />
                <GamesList games={games} />
            </Container>
        </>
    );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const games = await getGames();

        return { props: { games } };
    } catch (error) {
        return { props: { games: [] } };
    }
};
