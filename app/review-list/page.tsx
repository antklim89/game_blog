import ReviewsPageBase, { metadata } from './[publisher]/[developer]/[genre]/[page]/page';


async function ReviewsPage() {
  return (
    <ReviewsPageBase params={{
      publisher: 'all',
      developer: 'all',
      genre: 'all',
      page: 1,
    }}
    />
  );
}

export { metadata };

export default ReviewsPage;
