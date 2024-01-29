import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="text-green-500 p-3">
      <ul className="flex justify-between items-center">
        <li><Link className="hover:text-green-300 text-3xl" to="/">Teachimint</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
