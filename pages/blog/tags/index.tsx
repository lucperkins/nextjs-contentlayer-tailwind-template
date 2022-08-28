import Tags from "components/blog/tags/Tags";
import { allTags } from "lib/content";
import { NextPage } from "next";
import Head from "next/head";
import site from "site";

const Index: NextPage = () => {
  const { title } = site;

  return (
    <>
      <Head>
        <title>Available tags &mdash; {title}</title>
      </Head>

      <article className="space-y-4">
        <h1 className="text-3xl">Tags</h1>
        <Tags tags={allTags} />
      </article>
    </>
  );
};

export default Index;
