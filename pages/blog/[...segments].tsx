import Tags from "components/blog/tags/Tags";
import {
  PostProps,
  SegmentsParams,
  blogGetStaticPaths,
  blogGetStaticProps,
} from "lib/content";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths<SegmentsParams> =
  blogGetStaticPaths;
export const getStaticProps: GetStaticProps<PostProps, SegmentsParams> =
  blogGetStaticProps;

const Page: NextPage<PostProps> = ({ post }: PostProps) => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">{post.title}</h1>
      {post.tags && <Tags tags={post.tags} />}
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default Page;
