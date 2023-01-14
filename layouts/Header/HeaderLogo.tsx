import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from './Header.logo.svg';


const HeaderLogo: FC = () => {
    return (
        <Link href="/" key="2">
            <Image alt="logo" src={logo} />
        </Link>
    );
};

export default HeaderLogo;
