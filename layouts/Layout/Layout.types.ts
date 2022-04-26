import { ReactNode } from 'react';

import { HeaderProps } from '~/layouts/Header/Header.types';


export interface LayoutProps {
    topHeader?: HeaderProps
    children: ReactNode
}
