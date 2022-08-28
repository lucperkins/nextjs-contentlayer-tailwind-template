import Link from "next/link";

import { title } from "../site";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 bg-gray-800 text-white flex justify-between shadow-sm">
      <div>
        <Link href="/">{title}</Link>
      </div>

      <div className="space-x-4">
        <Link href="/docs">Docs</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
