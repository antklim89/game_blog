import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import GamesList from '~/layouts/GamesList';
import NewsList from '~/layouts/NewsList';
import { IGame, INews } from '~/types';
import { getGames, getNews } from '~/utils';


interface Props {
    games: IGame[]
    news: INews[]
}


const Home: NextPage<Props> = ({ games, news }) => {
    return (
        <>
            <Seo title="Home" />
            <Container>
                <Typography
                    component="h3"
                    mt={4}
                    textAlign="center"
                    variant="h3"
                >
                    Games
                </Typography>
                <GamesList games={games} />
                <Typography
                    component="h3"
                    mt={4}
                    textAlign="center"
                    variant="h3"
                >
                    News
                </Typography>
                <NewsList news={news} />
            </Container>
        </>
    );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const games = await getGames();
        const news = await getNews();

        return { props: { games, news } };
    } catch (error) {
        return { props: { games: [], news: [] } };
    }
};
