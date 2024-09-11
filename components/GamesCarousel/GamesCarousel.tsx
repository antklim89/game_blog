import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Carousel } from 'nuka-carousel';
import type { FC } from 'react';
import Image from '~/components/Image';
import type { GamesCarouselProps } from './GamesCarousel.types';


const GamesCarousel: FC<GamesCarouselProps> = ({ gamesCarousel }) => {
  return (
    <Carousel
      autoplay
      // wrapAround
      autoplayInterval={5000}
      // pauseOnHover={false}
    >
      {gamesCarousel.map(({ image, text, link = '' }) => (
        <Box
          component={link ? Link : 'div'}
          href={link}
          key={image}
        >
          <Box sx={{ position: 'relative', display: 'block' }}>
            <Box sx={{ '& img': { objectFit: 'cover', width: '100%' } }}>
              <Image
                alt={text}
                height={480}
                src={image}
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

