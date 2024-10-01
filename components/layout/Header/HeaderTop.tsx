import type { FC } from 'react';
import type { HeaderProps } from './Header.types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from '~/components/ui/Image';
import Markdown from '~/components/ui/Markdown';
import HeaderLogo from './HeaderLogo';


const HeaderTop: FC<HeaderProps> = ({ image, text, title }) => {
  if (image == null) return null;

  return (
    <Box
      sx={{
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'py': 4,
        'minHeight': [180, 320],
        'position': 'relative',
        '& > *': { zIndex: 1 },
        'overflow': 'hidden',
      }}
    >
      <HeaderLogo />
      {text != null
        ? (
            <Container sx={{ py: 4, textAlign: 'center', whiteSpace: 'pre-wrap' }}>
              <Markdown>
                {text}
              </Markdown>
            </Container>
          )
        : null}
      {title != null
        ? (
            <Container sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Typography
                alignItems="center"
                color="white"
                p={4}
                textAlign="center"
                variant="h1"
              >
                {title}
              </Typography>
            </Container>
          )
        : null}
      <Box
        sx={{
          'position': 'absolute',
          'top': '-50%',
          'right': 0,
          'left': 0,
          '& > span': { position: 'static !important' },
          'zIndex': '0 !important',
          'filter': 'brightness(0.7)',
          '& img': { objectFit: 'cover', width: '100%' },
        }}
      >
        <Image
          alt="top image"
          height={720}
          src={image}
          width={1280}
        />
      </Box>
    </Box>
  );
};

export default HeaderTop;
