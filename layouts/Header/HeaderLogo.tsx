import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from './Header.logo.svg';


const HeaderLogo: FC = () => {
    return (
        <Link passHref href="/" key="2">
            <a>
                <Image alt="logo" src={logo} />
            </a>
        </Link>
    );
};

export default HeaderLogo;
