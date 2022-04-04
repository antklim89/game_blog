import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import GamesList from '~/layouts/GamesList';


const Home: NextPage = () => {
    return (
        <>
            <Seo title="Home" />
            <Container>
                <GamesList />
            </Container>
        </>
    );
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
