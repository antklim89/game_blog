'use client';
import { type FC, useEffect, useState } from 'react';
import ArrowLeftTwoTone from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoTone from '@mui/icons-material/ArrowRightTwoTone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useEmblaCarousel from 'embla-carousel-react';
import type { GamesCarouselProps } from './GamesCarousel.types';


const GamesCarousel: FC<GamesCarouselProps> = ({ children }) => {
  const [emblaRef, api] = useEmblaCarousel({ loop: true });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isHover) return;
    const intervalId = setInterval(() => {
      api?.scrollNext();
    }, 5_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [api, isHover]);

  return (
    <Box
      ref={emblaRef}
      sx={{ overflow: 'hidden', position: 'relative' }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box sx={{ display: 'flex' }}>
        {children}
      </Box>
      <Box sx={{
        position: 'absolute',
        top: 10,
        left: 5,
        right: 5,
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Button
          aria-label="show next slide"
          variant="contained"
          onClick={() => api?.scrollPrev()}
        >
          <ArrowLeftTwoTone />
        </Button>
        <Button
          aria-label="show previous slide"
          variant="contained"
          onClick={() => api?.scrollNext()}
        >
          <ArrowRightTwoTone />
        </Button>
      </Box>
    </Box>
  );
};

export default GamesCarousel;

