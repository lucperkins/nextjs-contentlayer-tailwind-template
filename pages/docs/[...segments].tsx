import DocPage from "components/pages/DocPage"
import {
  DocProps,
  SegmentsParams,
  docsGetStaticPaths,
  docsGetStaticProps,
} from "lib/content"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths: GetStaticPaths<SegmentsParams> = docsGetStaticPaths

export const getStaticProps: GetStaticProps<DocProps, SegmentsParams> =
  docsGetStaticProps

export default DocPage
