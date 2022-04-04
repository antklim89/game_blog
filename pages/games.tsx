import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import GamesList from '~/layouts/GamesList';


const GamesPage: NextPage = () => {
    return (
        <>
            <Seo title="Games" />
            <Container>
                <GamesList />
            </Container>
        </>
    );
};

export default GamesPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
