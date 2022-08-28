import Tags from "components/blog/tags/Tags";
import {
  PostProps,
  SegmentsParams,
  blogGetStaticPaths,
  blogGetStaticProps,
} from "lib/content";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import site from "site";

export const getStaticPaths: GetStaticPaths<SegmentsParams> =
  blogGetStaticPaths;
export const getStaticProps: GetStaticProps<PostProps, SegmentsParams> =
  blogGetStaticProps;

const Page: NextPage<PostProps> = ({ post }: PostProps) => {
  const {
    title,
    description,
    tags,
    body: { html },
  } = post;

  return (
    <>
      <Head>
        <title>
          {title} &mdash; {site.title}
        </title>
        <meta name="description" content={description} />
      </Head>

      <article className="space-y-4">
        <h1 className="text-3xl">{title}</h1>
        {post.tags && <Tags tags={tags} />}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
};

export default Page;
