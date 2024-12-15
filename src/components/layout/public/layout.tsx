import { useMeta } from "@/stores/useMeta";
import { ReactNode, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./fragments/navbar";

interface Props {
  children: ReactNode;
}

export default function PublicLayout({ children }: Props) {
  const [title, setTitle] = useState<string>();
  const [keywords, setKeywords] = useState<string>();

  useEffect(() => {
    setTitle(useMeta.title());
    setKeywords(useMeta.keywords());
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Helmet>
      <Navbar />
      {children}
    </>
  );
}
