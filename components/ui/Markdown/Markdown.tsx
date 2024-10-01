import type { FC } from 'react';
import type { MarkdownProps } from './Markdown.types';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import MarkdownAnchor from './MarkdownAnchor';
import MarkdownImg from './MarkdownImg';


const Markdown: FC<MarkdownProps> = ({ children, ...props }) => {
  return (
    <Box sx={{ p: { whiteSpace: 'pre-wrap' } }}>
      <ReactMarkdown components={{ img: MarkdownImg, a: MarkdownAnchor }} {...props}>
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default Markdown;
