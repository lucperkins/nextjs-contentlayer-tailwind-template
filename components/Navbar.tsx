import Link from "next/link";
import site from "site";

type Link = {
  text: string;
  href: string;
};

const NavLink = ({ text, href }: Link) => {
  return (
    <Link href={href}>
      <a className="hover:text-gray-200">{text}</a>
    </Link>
  );
};

const Navbar = () => {
  const { title } = site;

  const links: Link[] = [
    { text: "Docs", href: "/docs" },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <nav className="py-4 bg-gray-800 text-white shadow-sm">
      <div className="px-4 md:px-8 flex justify-between mx-auto max-w-7xl">
        <div>
          <Link href="/">
            <a className="hover:text-gray-200">{title}</a>
          </Link>
        </div>

        <div className="space-x-4">
          {links.map((link) => (
            <NavLink key={link.text} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
