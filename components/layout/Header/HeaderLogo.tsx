import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import logo from './Header.logo.svg';


const HeaderLogo: FC = () => {
  return (
    <Link href="/" key="2">
      <Image alt="logo" src={logo as StaticImageData} />
    </Link>
  );
};

export default HeaderLogo;
