import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import { FC, ReactNode } from 'react';

import { GamesCarouselProps } from './GamesCarousel.types';


declare module 'nuka-carousel' {
    interface CarouselProps {
        children: ReactNode
    }
}

const GamesCarousel: FC<GamesCarouselProps> = ({ gamesCarousel }) => {
    return (
        <Carousel
            autoplay
            wrapAround
            autoplayInterval={5000}
            pauseOnHover={false}
        >
            {gamesCarousel.map(({ image, text, link = '' }) => (
                <Box
                    passHref
                    component={link ? Link : 'div'}
                    href={link}
                    key={image}
                >
                    <Box component="a" sx={{ position: 'relative', display: 'block' }}>
                        <Box>
                            <Image
                                alt={text}
                                height={480}
                                objectFit="cover"
                                src={`${process.env.URL || ''}${image}`}
                                width={1280}
                            />
                        </Box>
                        <Typography
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                left: 0,
                                backgroundColor: 'rgba(255,255,255,0.4)',
                                px: 8,
                                py: 1,
                                borderBottom: ({ palette }) => `4px solid ${palette.primary.main}`,
                            }}
                        >
                            {text}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Carousel>
    );
};

export default GamesCarousel;

