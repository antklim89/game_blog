import Container from '@mui/material/Container';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Game from '~/layouts/Game';
import { IGame } from '~/types';
import { getGamesPaths, getGame } from '~/utils';


interface Props {
    game: IGame;
}


const GamePage: NextPage<Props> = ({ game }) => {
    return (
        <>
            <Seo title={game.title} />
            <Container>
                <Game {...game} />
            </Container>
        </>
    );
};

export default GamePage;


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getGamesPaths();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, {slug: string}> = async ({ params }) => {
    if (!params) return { notFound: true };

    const game = getGame(params.slug);

    return { props: { game } };
};


