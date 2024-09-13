import { z } from 'zod';


export const newsSchema = z.object({
  slug: z.string(),
  publishedAt: z.string(),
  body: z.string(),
  title: z.string(),
  previewImage: z.string(),
});

export const aboutSchema = z.object({
  image: z.string(),
  text: z.string(),
});

export const gamesCarouselSchema = z.object({
  items: z.array(z.object({
    text: z.string(),
    image: z.string(),
    link: z.string().optional(),
  })),
});

export const reviewSchema = z.object({
  slug: z.string(),
  title: z.string(),
  genre: z.string(),
  publisher: z.string(),
  developer: z.string(),
  createdAt: z.string(),
  gameRelease: z.string(),
  previewImage: z.string(),
  body: z.string(),
});

export const reviewParamsSchema = z.object({
  publisher: z.string().transform(decodeURIComponent),
  developer: z.string().transform(decodeURIComponent),
  genre: z.string().transform(decodeURIComponent),
  page: z.coerce.number().min(1),
});

export const topHeaderSchema = z.object({
  homeText: z.string(),
  homeImage: z.string(),
  reviewsImage: z.string(),
  newsImage: z.string(),
  aboutImage: z.string(),
  contactsImage: z.string(),
});

