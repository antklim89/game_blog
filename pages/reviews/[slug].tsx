import Container from '@mui/material/Container';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Review from '~/layouts/Review';
import { IReview } from '~/types';
import { getReviewsPaths, getReview } from '~/utils';


interface Props {
    review: IReview;
}


const ReviewPage: NextPage<Props> = ({ review }) => {
    return (
        <>
            <Seo title={review.title} />
            <Container>
                <Review {...review} />
            </Container>
        </>
    );
};

export default ReviewPage;


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getReviewsPaths();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, {slug: string}> = async ({ params }) => {
    if (!params) return { notFound: true };

    const review = getReview(params.slug);

    return { props: { review } };
};


