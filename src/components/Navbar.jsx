import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/finesse">Finesse</Link>
        </li>
        <li>
          <Link to="/stability">Stability</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
