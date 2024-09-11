import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';
import About from '~/components/layout/About';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/Seo';
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

