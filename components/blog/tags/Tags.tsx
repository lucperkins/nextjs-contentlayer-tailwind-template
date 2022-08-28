import Link from "next/link";

type Props = {
  tags: string[];
};

const Tags = ({ tags }: Props) => {
  return (
    <ul className="flex space-x-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`/blog/tags/${tag}`}>
            <a className="text-xs bg-gray-100 py-1 px-2 rounded-sm hover:bg-gray-200">
              {tag}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
