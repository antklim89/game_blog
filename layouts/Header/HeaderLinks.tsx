import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';


const LINKS = [
    {
        href: '/topics',
        title: 'topics',
    },
    {
        href: '/contacts',
        title: 'contacts',
    },
    {
        href: '/about',
        title: 'about',
    },
];

const HeaderLinks: FC = () => {
    return (
        <nav>
            <Toolbar>
                {LINKS.map(({ href, title }) => (
                    <MenuItem key="title">
                        <Link passHref href={href}>
                            <Typography component="a" textTransform="uppercase">
                                {title}
                            </Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Toolbar>
        </nav>
    );
};

export default HeaderLinks;
