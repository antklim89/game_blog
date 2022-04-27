import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';

import { IAbout } from '~/types/about';


const About: FC<IAbout> = ({ text, image }) => {
    return (
        <article>
            <Typography component="h1" variant="h3">
                About Blog
            </Typography>
            <Typography>
                {text}
            </Typography>
        </article>
    );
};

export default About;

