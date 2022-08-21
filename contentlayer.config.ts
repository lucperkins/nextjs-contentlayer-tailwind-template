import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
});
