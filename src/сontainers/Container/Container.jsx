//!react and libraries
import clsx from 'clsx';
//!styles
import css from './Container.module.css';
//!component
//!helpers
//!assets
//!myRedux

function Container({ className, children }) {
  return <div className={clsx(css.container, className)}>{children}</div>;
}

export default Container;
