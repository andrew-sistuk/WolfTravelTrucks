import clsx from 'clsx';
import css from './Buttons.module.css';

export function Button({ type = 'submit', value, onClick, form, style }) {
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
