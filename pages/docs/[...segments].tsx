import {
  DocProps,
  SegmentsParams,
  docsGetStaticPaths,
  docsGetStaticProps,
} from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPage } from "next";
import Head from "next/head";
import site from "site";

export const getStaticPaths: GetStaticPaths<SegmentsParams> =
  docsGetStaticPaths;

export const getStaticProps: GetStaticProps<DocProps, SegmentsParams> =
  docsGetStaticProps;

const Page: NextPage<DocProps> = ({ doc }: DocProps) => {
  const {
    title,
    body: { html },
  } = doc;

  return (
    <>
      <Head>
        <title>
          {title} &mdash; {site.title}
        </title>
      </Head>

      <article className="space-y-4">
        <h1 className="text-3xl">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
};

export default Page;
