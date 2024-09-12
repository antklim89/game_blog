import type { z } from 'zod';
import type {
  aboutSchema,
  gamesCarouselSchema,
  newsSchema,
  reviewSchema,
  topHeaderSchema,
} from './schemas';


export interface FilesFilterOptions {
  limit?: number;
  page?: number;
  search?: Record<string, string | undefined>;
}

export interface Paginated<T> {
  items: T[];
  totalPages: number;
}

export interface ReviewFieldsList {
  genre: string[];
  publisher: string[];
  developer: string[];
}

export type ReviewFieldsNames = keyof ReviewFieldsList;

export type IAbout = z.infer<typeof aboutSchema>;
export type IGamesCarousel = z.infer<typeof gamesCarouselSchema>;
export type INews = z.infer<typeof newsSchema>;
export type IReview = z.infer<typeof reviewSchema>;
export type ITopHeader = z.infer<typeof topHeaderSchema>;
