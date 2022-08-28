import { ParsedUrlQuery } from "querystring";

import { Doc, Post, allDocs, allPosts } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import { unique } from "typescript-array-utils";

// Utilities
const arraysEqual = <T>(a: T[], b: T[]) =>
  a.every((val, idx) => val === b[idx]); // Come on, JS, this shouldn't be necessary

// Common param types
interface SegmentsParams extends ParsedUrlQuery {
  segments: string[];
}

// Helper functions
type WithRelativePath = { relativePath: string };

const getRawBySegments = <T extends WithRelativePath>(
  docs: T[],
  segments: string[]
): T | undefined => {
  return docs.find((d) => arraysEqual(d.relativePath.split("/"), segments));
};

type WithPath = { path: string };

const getPaths = <T extends WithPath>(docs: T[]): string[] =>
  docs.map((d) => d.path);

// Docs
type DocProps = {
  doc: NonNullable<ReturnType<typeof getDoc>>;
};

const getDoc = (segments: string[]): Doc | undefined =>
  getRawBySegments(allDocs, segments);

const allDocPaths: string[] = getPaths(allDocs);

const docsGetStaticProps: GetStaticProps<DocProps, SegmentsParams> = async ({
  params,
}) => {
  const { segments } = params!;
  const doc: Doc | undefined = getDoc(segments);
  return doc ? { props: { doc } } : { notFound: true };
};

const docsGetStaticPaths: GetStaticPaths<SegmentsParams> = async () => {
  return {
    paths: allDocPaths,
    fallback: false,
  };
};

// Blog posts
type PostProps = {
  post: NonNullable<ReturnType<typeof getPost>>;
};

const getPost = (segments: string[]): Post | undefined =>
  getRawBySegments(allPosts, segments);

const allBlogPaths: string[] = getPaths(allPosts);

const blogGetStaticProps: GetStaticProps<PostProps, SegmentsParams> = async ({
  params,
}) => {
  const { segments } = params!;
  const post: Post | undefined = getPost(segments);
  return post ? { props: { post } } : { notFound: true };
};

const blogGetStaticPaths: GetStaticPaths<SegmentsParams> = async () => {
  return {
    paths: allBlogPaths,
    fallback: false,
  };
};

// Tags
interface TagParams extends ParsedUrlQuery {
  tag: string;
}

type TagProps = {
  tag: string;
};

const tagGetStaticPaths: GetStaticPaths<TagParams> = async () => {
  const tags: string[] = unique(allPosts.flatMap((p) => p.tags));
  const paths: string[] = tags.map((t) => `/blog/tags/${t}`);
  return { paths, fallback: false };
};

const tagGetStaticProps: GetStaticProps<TagProps, TagParams> = async ({
  params,
}) => {
  const { tag } = params!;
  return { props: { tag } };
};

// Exports
export type { SegmentsParams, TagParams, DocProps, PostProps, TagProps };

export {
  docsGetStaticPaths,
  docsGetStaticProps,
  blogGetStaticPaths,
  blogGetStaticProps,
  tagGetStaticPaths,
  tagGetStaticProps,
};
