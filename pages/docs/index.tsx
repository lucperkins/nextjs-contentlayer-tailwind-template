import { allDocs } from "contentlayer/generated"
import Link from "next/link"

const DocsIndex = () => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">Docs</h1>

      <ul>
        {allDocs.map((doc) => (
          <li key={doc._id}>
            <Link href={doc.path}>
              <a>{doc.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default DocsIndex
