import css from './Layout.module.css';

function Layout({ children }) {
  return <div className={css.container}>{children}</div>;
}

export default Layout;
