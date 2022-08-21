import {
  LocalDocument,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
    },
    relativePath: {
      type: "string",
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
});
