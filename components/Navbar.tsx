import Link from "next/link";

import { title } from "../site";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 bg-gray-100 flex justify-between">
      <div>
        <Link href="/">{title}</Link>
      </div>

      <div>
        <Link href="/docs">Docs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
