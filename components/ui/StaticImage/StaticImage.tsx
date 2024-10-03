import type { FC } from 'react';
import type { StaticImageProps } from './StaticImage.types';
import NextImage from 'next/image';
import { createBlurDataURL } from '~/lib/createBlurDataURL';


const StaticImage: FC<StaticImageProps> = async ({ src, alt, ...props }) => {
  const blurDataURL = await createBlurDataURL(src);

  return (
    <NextImage
      alt={alt}
      blurDataURL={blurDataURL}
      placeholder="blur"
      src={src}
      {...props}
    />
  );
};

export default StaticImage;

