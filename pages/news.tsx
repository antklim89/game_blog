import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';


const TopicsPage: NextPage = () => {
    return (
        <Layout>
            <Seo title="topics" />
            <h1>TOPICS</h1>
        </Layout>
    );
};

export default TopicsPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
