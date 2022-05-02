import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { IAbout } from '~/types/about';


const About: FC<IAbout> = ({ text }) => {
    return (
        <article>
            <Typography component="h1" variant="h3">
                About Blog
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </article>
    );
};

export default About;

