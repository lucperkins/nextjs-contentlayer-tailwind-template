import { Doc } from "contentlayer/generated";
import { DocProps, SegmentsParams, allDocPaths, getDoc } from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths<SegmentsParams> = async () => {
  return {
    paths: allDocPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DocProps, SegmentsParams> = async ({
  params,
}) => {
  const { segments } = params!;
  const doc: Doc | undefined = getDoc(segments);
  return doc ? { props: { doc } } : { notFound: true };
};

const DocPage = ({ doc }: DocProps) => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">{doc.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
    </article>
  );
};

export default DocPage;
