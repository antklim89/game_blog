import Box from '@mui/material/Box';
import { type AnchorHTMLAttributes, type FC, type ImgHTMLAttributes, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from '~/components/Image';
import type { MarkdownProps } from './Markdown.types';


const Markdown: FC<MarkdownProps> = ({ children, ...props }) => {
  const img = useCallback(({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      alt={alt ?? 'image'}
      height={400}
      src={src ?? ''}
      style={{ objectFit: 'contain', objectPosition: 'left' }}
      width={1280}
    />
  ), []);

  const a = useCallback(({ children: anchorChildren, ...anchorProps }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...anchorProps}
      rel="noreferrer"
      target="_blank"
    >
      {anchorChildren}
    </a>
  ), []);

  return (
    <Box sx={{ p: { pb: 4 } }}>
      <ReactMarkdown components={{ img, a }} {...props}>
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default Markdown;

