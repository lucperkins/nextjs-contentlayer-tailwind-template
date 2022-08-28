import { DocProps } from "lib/content";

const DocPage = ({ doc }: DocProps) => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">{doc.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
    </article>
  );
};

export default DocPage;
