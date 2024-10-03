import type { ImgHTMLAttributes } from 'react';
import StaticImage from '~/components/ui/StaticImage';


function MarkdownImg({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <StaticImage
      alt={alt ?? 'image'}
      height={768}
      src={src ?? ''}
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={1024}
    />
  );
}

export default MarkdownImg;
