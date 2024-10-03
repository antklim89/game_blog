import type { ImageProps } from 'next/image';


export interface StaticImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}
