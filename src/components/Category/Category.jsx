//!react and libraries
//!styles
import css from './Category.module.css';
//!component
//!helpers
//!assets
//!myRedux

function Category({ Icon, text }) {
  return (
    <div className={css.category}>
      {Icon && <Icon className={css.icon} />}
      <p className={css.text}>{text}</p>
    </div>
  );
}

export default Category;
