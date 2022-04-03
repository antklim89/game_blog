import type { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';

import HeaderLogo from './HeaderLogo';


const HeaderTop: FC = () => {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    if (!matches) return null;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 4,
            }}
        >
            <HeaderLogo />
            <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, voluptate?
            </Typography>
        </Box>
    );
};

export default HeaderTop;
