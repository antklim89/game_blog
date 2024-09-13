import type { AnchorHTMLAttributes } from 'react';


function MarkdownAnchor(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      rel="noreferrer"
      target="_blank"
    />
  );
}

export default MarkdownAnchor;
