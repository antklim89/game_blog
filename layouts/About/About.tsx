import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { IAbout } from '~/types/about';


const About: FC<IAbout> = ({ text }) => {
    return (
        <article>
            <ReactMarkdown>
                {text}
            </ReactMarkdown>
        </article>
    );
};

export default About;

