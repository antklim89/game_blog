import type { FC } from 'react';
import Box from '@mui/material/Box';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import logo from './Header.logo.svg';


const HeaderLogo: FC = () => {
  return (
    <Link href="/" key="2">
      <Box
        alt="logo"
        component={Image}
        src={logo as StaticImageData}
        sx={{ width: '100%' }}
      />
    </Link>
  );
};

export default HeaderLogo;
