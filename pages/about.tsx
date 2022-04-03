import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';


const AboutPage: NextPage = () => {
    return (
        <>
            <Seo title="about" />
            <h1>About</h1>
        </>
    );
};

export default AboutPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
