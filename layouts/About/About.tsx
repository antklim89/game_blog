import type { FC } from 'react';
import Markdown from '~/components/Markdown';
import type { IAbout } from '~/lib/types';


const About: FC<IAbout> = ({ text }) => {
  return (
    <article>
      <Markdown>
        {text}
      </Markdown>
    </article>
  );
};

export default About;

