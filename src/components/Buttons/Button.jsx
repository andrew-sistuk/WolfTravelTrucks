//!react and libraries
//!styles
import css from './Buttons.module.css';
//!component
//!helpers
//!assets
//!myRedux

function Button({ type = 'submit', value, onClick, form }) {
  return (
    <button className={css.button} type={type} onClick={onClick} form={form}>
      {value}
    </button>
  );
}

export default Button;
