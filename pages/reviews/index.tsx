
import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Pagination from '~/components/Pagination';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import ReviewsList from '~/layouts/ReviewsList';
import topImage from '~/public/gene-brutty-nheWMnzmGZ4-unsplash.jpg';
import { GetFilesResult, IReview } from '~/types';
import { getReviews } from '~/utils/server';


export const LIMIT = 10;

export interface Props {
    reviews: GetFilesResult<IReview>;
}

const ReviewsPage: NextPage<Props> = ({ reviews }) => {
    return (
        <Layout image={topImage} title="Reviews">
            <Seo title="Reviews" />
            <Container>
                <Pagination path="/reviews" totalPages={reviews.totalPages} />
                <ReviewsList reviews={reviews.items} />
                <Pagination path="/reviews" totalPages={reviews.totalPages} />
            </Container>
        </Layout>
    );
};

export default ReviewsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const reviews = await getReviews({ limit: LIMIT });

    return { props: { reviews } };
};

