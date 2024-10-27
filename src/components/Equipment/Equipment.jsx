//!react and libraries
//!styles
import css from './Equipment.module.css';
//!component
//!helpers
//!assets
//!myRedux

export function Equipment({ Icon, text }) {
  return (
    <>
      {Icon && <Icon className={css.icon} />}
      <p className={css.text}>{text}</p>
    </>
  );
}

export default Equipment;
