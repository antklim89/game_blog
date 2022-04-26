
import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import ReviewsList from '~/layouts/ReviewsList';
import { IReview } from '~/types';
import { getReviews } from '~/utils';


interface Props {
    reviews: IReview[];
}

const ReviewsPage: NextPage<Props> = ({ reviews }) => {
    return (
        <>
            <Seo title="Reviews" />
            <Container>
                <ReviewsList reviews={reviews} />
            </Container>
        </>
    );
};

export default ReviewsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const reviews = await getReviews();

        return { props: { reviews } };
    } catch (error) {
        return { props: { reviews: [] } };
    }
};

