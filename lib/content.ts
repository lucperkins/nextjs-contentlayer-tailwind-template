import { ParsedUrlQuery } from "querystring";

import { Doc, Post, allDocs, allPosts } from "contentlayer/generated";

// Utilities
const arraysEqual = <T>(a: T[], b: T[]) =>
  a.every((val, idx) => val === b[idx]);

// Param types
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
const getDoc = (segments: string[]): Doc | undefined =>
  getRawBySegments(allDocs, segments);

const allDocPaths: string[] = getPaths(allDocs);

// Blog posts
const getPost = (segments: string[]): Post | undefined =>
  getRawBySegments(allPosts, segments);

const allBlogPaths: string[] = getPaths(allPosts);

// Prop types
type DocProps = {
  doc: NonNullable<ReturnType<typeof getDoc>>;
};

type PostProps = {
  post: NonNullable<ReturnType<typeof getPost>>;
};

// Exports
export type { SegmentsParams, DocProps, PostProps };

export { getDoc, allDocPaths, getPost, allBlogPaths };
