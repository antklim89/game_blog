import NextImage from 'next/image';
import type { FC } from 'react';
import { createBlurDataURL } from '~/lib/createBlurDataURL';
import type { StaticImageProps } from './StaticImage.types';


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

