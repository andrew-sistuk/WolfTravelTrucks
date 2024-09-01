import css from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link className={css.logo} to="/" />
      <nav>
        <ul>
          <li>
            <NavLink className={css.navigate} to="/"></NavLink>
          </li>

          <li>
            <NavLink className={css.navigate} to="/catalog"></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
