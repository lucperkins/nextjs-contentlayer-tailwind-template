import { Post, allPosts } from "contentlayer/generated";
import { TagProps } from "lib/content";
import Link from "next/link";

const TagPage = ({ tag }: TagProps) => {
  const postsWithTag: Post[] = allPosts.filter((p) => p.tags.includes(tag));

  return (
    <article className="space-y-4">
      <h1 className="text-3xl">
        Pages tagged <span className="font-bold">{tag}</span>
      </h1>
      <ul>
        {postsWithTag.map((p) => (
          <li key={p._id}>
            <Link href={p.path}>
              <a>{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TagPage;
