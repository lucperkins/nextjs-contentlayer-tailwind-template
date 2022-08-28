import { PostProps } from "lib/content"
import Link from "next/link"

const PostPage = ({ post }: PostProps) => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">{post.title}</h1>
      {post.tags && (
        <ul className="flex space-x-2">
          {post.tags.map((t) => (
            <li
              className="bg-gray-100 py-0.5 px-2 text-sm rounded hover:bg-gray-200"
              key={t}
            >
              <Link href={`./tags/${t}`}>{t}</Link>
            </li>
          ))}
        </ul>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}

export default PostPage
