//!react and libraries
import clsx from 'clsx';
//!styles
import css from './Buttons.module.css';
//!component
//!helpers
//!assets
//!myRedux

function Button({ type = 'submit', value, onClick, form, style }) {
  return (
    <button
      className={clsx(css.button, style)}
      type={type}
      onClick={onClick}
      form={form}
    >
      {value}
    </button>
  );
}

export default Button;
