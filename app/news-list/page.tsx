import ReviewsPageBase, { metadata } from './[page]/page';


async function ReviewsPage() {
  return (
    <ReviewsPageBase params={{
      page: '1',
    }}
    />
  );
}

export { metadata };

export default ReviewsPage;
