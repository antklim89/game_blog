import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import About from '~/layouts/About';
import Layout from '~/layouts/Layout';
import { ITopHeader } from '~/types';
import { IAbout } from '~/types/about';
import { getTopHeader } from '~/utils/server';

import { getAbout } from '../utils/server/getAbout';


interface Props {
    about: IAbout
    topHeader: ITopHeader
}

const AboutPage: NextPage<Props> = ({ about, topHeader }) => {
    return (
        <Layout image={topHeader.aboutImage} title="About Blog">
            <Seo title="about" />
            <Container>
                <About {...about} />
            </Container>
        </Layout>
    );
};

export default AboutPage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const [
        about,
        topHeader,
    ] = await Promise.all([
        getAbout(),
        getTopHeader(),
    ]);

    return { props: { about, topHeader } };
};

