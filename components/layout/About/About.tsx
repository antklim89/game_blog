import type { FC } from 'react';
import Container from '@mui/material/Container';
import Markdown from '~/components/ui/Markdown';
import { getAbout } from '~/lib/contentLoaders';


const About: FC = async () => {
  const { text } = await getAbout();

  return (
    <Container component="article">
      <Markdown>
        {text}
      </Markdown>
    </Container>
  );
};

export default About;

