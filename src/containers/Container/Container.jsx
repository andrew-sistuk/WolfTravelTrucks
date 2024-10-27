import clsx from 'clsx';
import css from './Container.module.css';

export function Container({ className, children }) {
  return <div className={clsx(css.container, className)}>{children}</div>;
}
