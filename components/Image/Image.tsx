import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';


const Image: FC<ImageProps> = ({ src, alt, ...props }) => {
    return (
        <NextImage
            alt={alt}
            blurDataURL={`/_next/image?url=${process.env.URL || ''}${src}&w=32&q=10`}
            placeholder="blur"
            src={`${process.env.URL || ''}${src}`}
            {...props}
        />
    );
};

export default Image;

