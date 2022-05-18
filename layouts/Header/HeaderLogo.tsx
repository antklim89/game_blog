import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';


const HeaderLogo: FC = () => {
    return (
        <Link passHref href="/" key="2">
            <Typography
                component="a"
                fontWeight="bold"
                variant="h5"
            >
                GAME BLOG
            </Typography>
        </Link>
    );
};

export default HeaderLogo;
