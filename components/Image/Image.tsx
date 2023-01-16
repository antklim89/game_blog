import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';


const Image: FC<ImageProps> = ({ src, alt, ...props }) => {

    return (
        <NextImage
            alt={alt}
            blurDataURL={`/_next/image?url=${src}&w=32&q=10`}
            placeholder="blur"
            src={`${src}`}
            {...props}
        />
    );
};

export default Image;

