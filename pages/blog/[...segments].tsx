import PostPage from "components/pages/PostPage";
import {
  PostProps,
  SegmentsParams,
  blogGetStaticPaths,
  blogGetStaticProps,
} from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths<SegmentsParams> =
  blogGetStaticPaths;
export const getStaticProps: GetStaticProps<PostProps, SegmentsParams> =
  blogGetStaticProps;

export default PostPage;
