import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { GetServerSideProps, NextPage } from 'next';

import Pagination from '~/components/Pagination';
import SelectReviewFields from '~/components/SelectReviewFields';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import ReviewsList from '~/layouts/ReviewsList';
import topImage from '~/public/gene-brutty-nheWMnzmGZ4-unsplash.jpg';
import { GetFilesResult, IReview, ReviewFieldsList } from '~/types';
import { getReviews, getReviewsFields } from '~/utils/server';


export const LIMIT = 10;

export interface Props {
    reviews: GetFilesResult<IReview>;
    reviewFields: ReviewFieldsList
}

const ReviewsPage: NextPage<Props> = ({ reviews, reviewFields }) => {

    return (
        <Layout image={topImage} title="Reviews">
            <Seo title="Reviews" />
            <Container>
                <Box
                    alignItems="center"
                    display="flex"
                    flexDirection={['column', null, 'row']}
                    justifyContent="space-around"
                >
                    <SelectReviewFields {...reviewFields} />
                    <Pagination path="/reviews" totalPages={reviews.totalPages} />
                </Box>
                <ReviewsList reviews={reviews.items} />
                <Pagination path="/reviews" totalPages={reviews.totalPages} />
            </Container>
        </Layout>
    );
};

export default ReviewsPage;

export const getStaticProps: GetServerSideProps<Props, { page?: string }> = async () => {
    const reviews = await getReviews({ limit: LIMIT });

    const reviewFields = await getReviewsFields();

    return { props: { reviews, reviewFields } };
};

