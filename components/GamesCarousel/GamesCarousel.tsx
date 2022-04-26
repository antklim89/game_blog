import Carousel from 'nuka-carousel';
import { FC, ReactNode } from 'react';

import { GamesCarouselProps } from './types';


// declare module 'nuka-carousel' {
//     interface CarouselProps {
//         children: ReactNode
//     }
// }

const GamesCarousel: FC<GamesCarouselProps> = () => {

    return (
        <Carousel>
            <img alt="" src="/placeholder" />
            <img alt="" src="/placeholder" />
            <img alt="" src="/placeholder" />
        </Carousel>
    );
};

export default GamesCarousel;

