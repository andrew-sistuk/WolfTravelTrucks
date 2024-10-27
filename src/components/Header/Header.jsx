import clsx from 'clsx';
import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';

import { Container } from 'containers';
import { Message, Modal } from 'components';

import Logo from '/src/assets/icons/logo.svg?react';

export default function Header() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navigate, isActive && css.active);
  };

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
