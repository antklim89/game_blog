'use client';
import ArrowLeftTwoTone from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoTone from '@mui/icons-material/ArrowRightTwoTone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import Image from '~/components/ui/Image';
import type { GamesCarouselProps } from './GamesCarousel.types';


const GamesCarousel: FC<GamesCarouselProps> = ({ gamesCarousel }) => {
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
        {gamesCarousel.map(({ image, text, link = '' }) => (
          <Box
            component={link ? Link : 'div'}
            href={link}
            key={image}
            sx={{ flex: '0 0 100%', minWidth: 0, position: 'relative' }}
          >
            <Box>
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

