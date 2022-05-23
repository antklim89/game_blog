import { FC } from 'react';

import Markdown from '~/components/Markdown';
import { IAbout } from '~/types/about';


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

