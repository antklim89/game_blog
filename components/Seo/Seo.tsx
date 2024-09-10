import Head from 'next/head';
import { type FC, memo } from 'react';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '~/constants';
import type { SeoProps } from './Seo.types';


const Seo: FC<SeoProps> = ({
  description,
  keywords,
  title,
}) => {
  const metaDescription = `${DEFAULT_DESCRIPTION} ${description ?? ''}`.trim();
  const metaTitle = `${title != null ? `${title} | ` : ''}${DEFAULT_TITLE}`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <link href="/favicon.ico" rel="icon" />
      <meta content={metaDescription} name="description" />
      <meta content={['games', 'blog', ...(keywords || [])].join(', ')} name="keywords" />
      <meta content={metaDescription} name="description" />
      <meta content={metaTitle} property="og:title" />
      <meta content={metaDescription} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={metaTitle} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />
    </Head>
  );
};

export default memo(Seo);
