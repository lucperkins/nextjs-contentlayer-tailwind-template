import Posts from "components/blog/Posts";
import { allPosts } from "contentlayer/generated";
import { NextPage } from "next";
import Head from "next/head";
import site from "site";

const Index: NextPage = () => {
  const { title } = site;

  return (
    <>
      <Head>
        <title>Blog &mdash; {title}</title>
      </Head>

      <article className="space-y-4">
        <h1 className="text-3xl">Blog</h1>

        <Posts posts={allPosts} />
      </article>
    </>
  );
};

export default Index;
