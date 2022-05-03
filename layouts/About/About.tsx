import { FC } from 'react';

import { IAbout } from '~/types/about';


const About: FC<IAbout> = ({ text }) => {
    return (
        <article>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </article>
    );
};

export default About;

