import { ParsedUrlQuery } from "querystring";

import { Doc, allDocs } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";

interface Params extends ParsedUrlQuery {
  segments: string[];
}

type Props = {
  doc: NonNullable<ReturnType<typeof getDoc>>;
};

const arraysEqual = <T,>(a: T[], b: T[]): boolean =>
  a.every((val, idx) => val === b[idx]);

const getDoc = (segments: string[]): Doc | undefined => {
  return allDocs.find((d) => arraysEqual(d.relativePath.split("/"), segments));
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths: string[] = allDocs.map((d) => d.path);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
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
