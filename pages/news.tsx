import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';


const TopicsPage: NextPage = () => {
    return (
        <>
            <Seo title="topics" />
            <h1>TOPICS</h1>
        </>
    );
};

export default TopicsPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
