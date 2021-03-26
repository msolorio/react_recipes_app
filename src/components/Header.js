import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Chef Master</h1>

      <nav>
        <ul className="navList">
          <li><Link className="navLink" to="/">Home</Link></li>
          <li><Link className="navLink" to="/categories">Explore</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
