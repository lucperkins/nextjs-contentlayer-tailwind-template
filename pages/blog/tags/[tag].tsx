import Card from "components/blog/Card";
import Posts from "components/blog/Posts";
import { Post } from "contentlayer/generated";
import {
  TagParams,
  TagProps,
  postsWithTag,
  tagGetStaticPaths,
  tagGetStaticProps,
} from "lib/content";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths<TagParams> = tagGetStaticPaths;

export const getStaticProps: GetStaticProps<TagProps, TagParams> =
  tagGetStaticProps;

const Page: NextPage<TagProps> = ({ tag }: TagProps) => {
  const relevantPosts: Post[] = postsWithTag(tag);

  return (
    <article className="space-y-4">
      <h1 className="text-3xl">
        Pages tagged <span className="font-bold">{tag}</span>
      </h1>
      <Posts posts={relevantPosts} />
    </article>
  );
};

export default Page;
