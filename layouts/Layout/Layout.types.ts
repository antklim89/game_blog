import { ReactNode } from 'react';

import { ITopHeader } from '~/types';


export interface LayoutProps extends ITopHeader {
    children: ReactNode
}
