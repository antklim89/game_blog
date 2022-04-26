import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';


const AboutPage: NextPage = () => {
    return (
        <Layout>
            <Seo title="about" />
            <h1>About</h1>
        </Layout>
    );
};

export default AboutPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
