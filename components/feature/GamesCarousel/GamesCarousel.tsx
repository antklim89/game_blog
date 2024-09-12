import { getGamesCarousel } from '~/lib/contentLoaders';
import GamesCarouselBody from './GamesCarouselBody';


async function GamesCarousel() {
  const gamesCarousel = await getGamesCarousel();
  return <GamesCarouselBody gamesCarousel={gamesCarousel.items} />;
}

export default GamesCarousel;

