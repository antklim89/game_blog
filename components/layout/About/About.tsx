import type { FC } from 'react';
import Markdown from '~/components/ui/Markdown';
import { getAbout } from '~/lib/contentLoaders';


const About: FC = async () => {
  const { text } = await getAbout();

  return (
    <article>
      <Markdown>
        {text}
      </Markdown>
    </article>
  );
};

export default About;

