import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';


const GamesPage: NextPage = () => {
    return (
        <>
            <Seo title="Games" />
            <h1>GAMES</h1>
        </>
    );
};

export default GamesPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
