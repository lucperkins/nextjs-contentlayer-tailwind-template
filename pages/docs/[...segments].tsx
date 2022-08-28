import {
  DocProps,
  SegmentsParams,
  docsGetStaticPaths,
  docsGetStaticProps,
} from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPage } from "next";

export const getStaticPaths: GetStaticPaths<SegmentsParams> =
  docsGetStaticPaths;

export const getStaticProps: GetStaticProps<DocProps, SegmentsParams> =
  docsGetStaticProps;

const Page: NextPage<DocProps> = ({ doc }: DocProps) => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">{doc.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
    </article>
  );
};

export default Page;
