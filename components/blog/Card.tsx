import { PostProps } from "lib/content";
import Link from "next/link";

import Tags from "./tags/Tags";

const Card = ({ post }: PostProps) => {
  const { title, path, tags } = post;

  return (
    <Link href={path}>
      <div className="py-4 px-6 border-2 rounded-md hover:border-sky-500 hover:cursor-pointer flex-col space-y-4">
        <p className="text-2xl font-semibold tracking-tight">{title}</p>
        <p></p>
        {tags.length > 0 && <Tags tags={tags} />}
      </div>
    </Link>
  );
};

export default Card;
