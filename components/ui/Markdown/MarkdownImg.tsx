import type { ImgHTMLAttributes } from 'react';
import Image from '~/components/ui/Image';


function MarkdownImg({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      alt={alt ?? 'image'}
      height={400}
      src={src ?? ''}
      style={{ objectFit: 'contain', objectPosition: 'left' }}
      width={1280}
    />
  );
}

export default MarkdownImg;
