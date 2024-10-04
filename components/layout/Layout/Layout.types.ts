import type { ReactNode } from 'react';
import type { HeaderProps } from '~/components/layout/Header/Header.types';


export interface LayoutProps extends HeaderProps {
  children: ReactNode;
}
