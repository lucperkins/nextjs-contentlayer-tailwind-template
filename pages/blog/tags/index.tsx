import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { unique } from "typescript-array-utils"

const allTags = unique(allPosts.flatMap((p) => p.tags))

const TagsIndex = () => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">Tags</h1>
      <ul>
        {allTags.map((t) => (
          <li key={t}>
            <Link href={`./tags/${t}`}>{t}</Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default TagsIndex
