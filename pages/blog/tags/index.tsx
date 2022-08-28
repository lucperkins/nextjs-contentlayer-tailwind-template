import { allTags } from "lib/content";
import { NextPage } from "next";
import Link from "next/link";

const Index: NextPage = () => {
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
  );
};

export default Index;
