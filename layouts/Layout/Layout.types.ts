import { ReactNode } from 'react';

import { HeaderProps } from '~/layouts/Header/Header.types';


export interface LayoutProps extends HeaderProps {
    children: ReactNode
}
