import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';
import Seo from '~/components/Seo';
import About from '~/layouts/About';
import Layout from '~/layouts/Layout';
import { getAbout, getTopHeader } from '~/lib/contentLoaders';
import type { IAbout, ITopHeader } from '~/lib/types';


interface Props {
  about: IAbout;
  topHeader: ITopHeader;
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

