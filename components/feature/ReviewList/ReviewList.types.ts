import type { IReview } from '~/lib/types';


export interface ReviewListProps {
  reviews: IReview[];
}


export type ReviewListItemProps = IReview;
