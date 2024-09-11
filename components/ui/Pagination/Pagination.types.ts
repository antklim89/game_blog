import type { PaginationRenderItemParams } from '@mui/material';


type PaginationPath = string | ((page: number) => string);

export interface PaginationProps {
  totalPages: number;
  path: PaginationPath;
}

export type PaginationItemProps = PaginationRenderItemParams & {
  path: PaginationPath;
};
