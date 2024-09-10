import { getPaths } from './getPaths';


type GetReviewsPaths = {
  params: {
    slug: string;
  };
}[];


export async function getReviewsPaths(): Promise<GetReviewsPaths> {
  return getPaths('reviews');
}

