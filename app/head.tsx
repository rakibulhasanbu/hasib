'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Khairul Islam Hasib ${
      pathname === '/' ? '' : '· ' + titleFixedToShow
    }`,
    description: `Creative script writer with 3+ years of storytelling expertise. Based in Bangladesh, I craft compelling narratives across various mediums, from screenplays to digital content. My passion lies in weaving engaging stories that resonate with audiences worldwide. Combining traditional storytelling techniques with modern narrative structures, I specialize in creating authentic, emotionally-driven content. Always exploring new storytelling formats and collaborating with diverse creative teams.`,
    keywords:
      'Khairul Islam Hasib, Script Writer, Screenwriter, Content Writer, Creative Writing, Storytelling, Narrative Design, Digital Content, Screenplay Writing, Story Development, Creative Professional, Bangladesh Writer, Professional Writer, Dialogue Writing, Character Development',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:url" content={`https://hasib.vercel.app${pathname}`} />
      <link rel="canonical" href={`https://hasib.vercel.app${pathname}`} />
      <link rel="me" href="mailto:hasib.dev@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Khairul Islam Hasib" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hasib_dev_" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};

export default Head;
