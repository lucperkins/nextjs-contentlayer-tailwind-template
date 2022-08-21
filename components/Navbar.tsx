import { title } from "../site";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 bg-gray-100">
      <div>
        <p>{title}</p>
      </div>
    </nav>
  );
};

export default Navbar;
