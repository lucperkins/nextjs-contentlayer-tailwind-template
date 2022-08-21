import { Doc, allDocs } from "contentlayer/generated";
import { SegmentsParams, allDocPaths, getDoc } from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  doc: NonNullable<ReturnType<typeof getDoc>>;
};

export const getStaticPaths: GetStaticPaths<SegmentsParams> = async () => {
  return {
    paths: allDocPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, SegmentsParams> = async ({
  params,
}) => {
  const { segments } = params!;
  const doc: Doc | undefined = getDoc(segments);
  return doc ? { props: { doc } } : { notFound: true };
};

const DocPage = ({ doc }: Props) => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">{doc.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
    </article>
  );
};

export default DocPage;
