import { allDocs } from "contentlayer/generated";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import site from "site";

const Index: NextPage = () => {
  const { title } = site;

  return (
    <>
      <Head>
        <title>Docs &mdash; {title}</title>
      </Head>

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
    </>
  );
};

export default Index;
