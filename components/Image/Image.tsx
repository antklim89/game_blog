import NextImage, { type ImageProps } from 'next/image';
import type { FC } from 'react';


const Image: FC<ImageProps> = ({ src, alt, ...props }) => {
  if (typeof src === 'string') {
    return (
      <NextImage
        alt={alt}
        blurDataURL={`/_next/image?url=${src}&w=32&q=10`}
        placeholder="blur"
        src={`${src}`}
        {...props}
      />
    );
  }
  return (
    <NextImage
      alt={alt}
      placeholder="blur"
      src={src}
      {...props}
    />
  );
};

export default Image;

