import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';

import { IAbout } from '~/types/about';


const About: FC<IAbout> = ({ text, image }) => {
    return (
        <article>
            <Image
                alt="about"
                height={480}
                src={image}
                width={1920}
            />
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

