import type { ReactNode } from 'react';

import type { HeaderProps } from '~/layouts/Header/Header.types';


export interface LayoutProps extends HeaderProps {
  children: ReactNode;
}
