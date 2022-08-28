import Posts from "components/blog/Posts";
import { allPosts } from "contentlayer/generated";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">Blog</h1>

      <Posts posts={allPosts} />
    </article>
  );
};

export default Index;
