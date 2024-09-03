import css from './Container.module.css';
import clsx from 'clsx';
import Message from '../Message/Message.jsx';

function Container({ className, children }) {
  return (
    <div className={clsx(css.container, className)}>
      {children}
      <Message />
    </div>
  );
}

export default Container;
