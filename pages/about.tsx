import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import About from '~/layouts/About';
import Layout from '~/layouts/Layout';
import { IAbout } from '~/types/about';

import { getAbout } from '../utils/getAbout';


interface Props {
    about: IAbout
}

const AboutPage: NextPage<Props> = ({ about }) => {
    return (
        <Layout image={about.image}>
            <Seo title="about" />
            <Container>
                <About {...about} />
            </Container>
        </Layout>
    );
};

export default AboutPage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const about = await getAbout();

    return { props: { about } };
};

