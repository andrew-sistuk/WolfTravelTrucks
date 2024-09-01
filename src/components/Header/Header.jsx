import css from './Header.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Container from '../Container/Container.jsx';
import clsx from 'clsx';
import Logo from '/public/logo.svg?react';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navigate, isActive && css.active);
};

function Header() {
  return (
    <>
      <header>
        <Container className={css.header}>
          <Link className={css['logo-link']} to="/">
            <Logo className={css.logo} height={24} />
          </Link>
          <nav>
            <ul className={css['list-links']}>
              <li>
                <NavLink className={buildLinkClass} to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className={buildLinkClass} to="/catalog">
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
