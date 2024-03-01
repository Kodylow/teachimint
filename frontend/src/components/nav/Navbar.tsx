import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-3 px-4 -mt-[60px] absolute top-0 w-full bg-white shadow-lg">
      <ul className="flex justify-between items-center">
        <li>
          <Link className="hover:text-green-700 text-3xl" to="/">
            Teachimint
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
