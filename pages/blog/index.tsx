import { allPosts } from "contentlayer/generated";
import Link from "next/link";

const DocsIndex = () => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">Blog</h1>

      <ul>
        {allPosts.map((post) => (
          <li key={post._id}>
            <Link href={post.path}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default DocsIndex;
