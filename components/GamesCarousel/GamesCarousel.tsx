import Carousel from 'nuka-carousel';
import { FC } from 'react';

import { GamesCarouselProps } from './types';


const GamesCarousel: FC<GamesCarouselProps> = () => {

    return (
        <Carousel>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Carousel>
    );
};

export default GamesCarousel;

