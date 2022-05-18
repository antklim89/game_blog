import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';

import { HeaderProps } from './Header.types';
import HeaderLogo from './HeaderLogo';


const HeaderTop: FC<HeaderProps> = ({ image, text, title }) => {

    if (!image) return null;

    const imageProps = typeof image === 'string'
        ? { src: `${process.env.URL || ''}${image}` }
        : { ...image, src: `${process.env.URL || ''}${image.src}` };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 4,
                minHeight: [180, 320],
                position: 'relative',
                '& > *': { zIndex: 1 },
                overflow: 'hidden',
            }}
        >
            <HeaderLogo />
            {text && (
                <Container sx={{ }}>
                    <Box dangerouslySetInnerHTML={{ __html: text }} sx={{ py: 4, textAlign: 'center' }} />
                </Container>
            )}
            {title && (
                <Container sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
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
            )}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0, right: 0, left: 0, bottom: 0,
                    '& > span': { position: 'static !important' },
                    zIndex: '0 !important',
                    filter: 'brightness(0.7)',
                }}
            >
                <Image
                    alt="top image"
                    height={720}
                    objectFit="cover"
                    width={1280}
                    {...imageProps}
                    placeholder={typeof image === 'string' ? 'empty' : 'blur'}
                />
            </Box>
        </Box>
    );
};

export default HeaderTop;
