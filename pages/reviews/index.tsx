
import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import ReviewsList from '~/layouts/ReviewsList';
import { GetFilesResult, IReview } from '~/types';
import { getReviews } from '~/utils/server';


interface Props {
    reviews: GetFilesResult<IReview>;
}

const ReviewsPage: NextPage<Props> = ({ reviews }) => {
    return (
        <Layout>
            <Seo title="Reviews" />
            <Container>
                <ReviewsList reviews={reviews.items} />
            </Container>
        </Layout>
    );
};

export default ReviewsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const reviews = await getReviews();

    return { props: { reviews } };
};

