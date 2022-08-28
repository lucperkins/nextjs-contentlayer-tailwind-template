import TagPage from "components/pages/TagPage";
import {
  TagParams,
  TagProps,
  tagGetStaticPaths,
  tagGetStaticProps,
} from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths<TagParams> = tagGetStaticPaths;

export const getStaticProps: GetStaticProps<TagProps, TagParams> =
  tagGetStaticProps;

export default TagPage;
