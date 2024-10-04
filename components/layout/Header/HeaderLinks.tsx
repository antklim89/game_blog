'use client';
import Link from 'next/link';
import { type FC, useCallback, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import type { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';


const LINKS = [
  {
    href: '/',
    title: 'home',
  },
  {
    href: '/review-list',
    title: 'reviews',
  },
  {
    href: '/news-list',
    title: 'news',
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
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const links = LINKS.map(({ href, title }) => (
    <MenuItem key={title} onClick={handleCloseDrawer}>
      <Typography
        component={Link}
        href={href}
        textTransform="uppercase"
      >
        {title}
      </Typography>
    </MenuItem>
  ));

  if (matches) {
    return (
      <nav>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          {links}
        </Toolbar>
      </nav>
    );
  }

  return (
    <nav>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <IconButton
          aria-label="navigation menu"
          color="inherit"
          edge="start"
          sx={{ mr: 2 }}
          onClick={handleToggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={handleCloseDrawer}
        >
          <Box
            sx={{
              backgroundColor: 'primary.main',
              minWidth: 320,
              color: 'white',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {links}
          </Box>
        </Drawer>
      </Toolbar>
    </nav>
  );
};

export default HeaderLinks;
