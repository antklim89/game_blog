import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StaticImage from '~/components/ui/StaticImage';
import { getGamesCarousel } from '~/lib/contentLoaders';
import GamesCarouselBody from './GamesCarouselBody';


async function GamesCarousel() {
  const gamesCarousel = await getGamesCarousel();

  return (
    <GamesCarouselBody>
      {gamesCarousel.items.map(({ image, text, link = '' }) => (
        <Box
          component={link ? Link : 'div'}
          href={link}
          key={image}
          sx={{ flex: '0 0 100%', minWidth: 0, position: 'relative' }}
        >
          <Box>
            <Box sx={{ '& img': { objectFit: 'cover', width: '100%' } }}>
              <StaticImage
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
                borderBottomColor: 'primary.main',
                borderBottomStyle: 'solid',
                borderBottomWidth: '4px',
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      ))}
    </GamesCarouselBody>
  );
}

export default GamesCarousel;

