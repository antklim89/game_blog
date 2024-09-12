import type { Metadata } from 'next';
import About from '~/components/layout/About';
import Layout from '~/components/layout/Layout';
import { getTopHeader } from '~/lib/contentLoaders';


export const metadata: Metadata = {
  title: 'About',
};

async function AboutPage() {
  const { aboutImage } = await getTopHeader();

  return (
    <Layout image={aboutImage}>
      <About />
    </Layout>
  );
}

export default AboutPage;
