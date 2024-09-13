import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import type { FC } from 'react';
import MarkdownAnchor from './MarkdownAnchor';
import MarkdownImg from './MarkdownImg';
import type { MarkdownProps } from './Markdown.types';


const Markdown: FC<MarkdownProps> = ({ children, ...props }) => {
  return (
    <Box sx={{ p: { pb: 4 } }}>
      <ReactMarkdown components={{ img: MarkdownImg, a: MarkdownAnchor }} {...props}>
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default Markdown;
