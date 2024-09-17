//!react and libraries
import clsx from 'clsx';
import { Link, NavLink, Outlet } from 'react-router-dom'; //!styles
import css from './Header.module.css'; //!component
import Container from '../../сontainers/Container/Container.jsx';
import Logo from '/src/assets/icons/logo.svg?react';
import Modal from '../Modal/Modal.jsx';
import Message from '../Message/Message.jsx'; //!helpers
//!helpers
//!assets
//!myRedux

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
                <NavLink className={buildLinkClass} to="/campers">
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <Outlet />
      <Modal />
      <Message />
    </>
  );
}

export default Header;
