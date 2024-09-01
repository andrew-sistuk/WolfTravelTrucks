import css from './Container.module.css';
import clsx from 'clsx';

function Container({ className, children }) {
  return <div className={clsx(css.container, className)}>{children}</div>;
}

export default Container;
