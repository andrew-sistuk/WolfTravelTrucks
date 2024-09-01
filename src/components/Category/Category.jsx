import css from './Category.module.css';

function Category({ Icon, text }) {
  return (
    <div className={css.category}>
      <Icon className={css.icon} />
      <p className={css.text}>{text}</p>
    </div>
  );
}

export default Category;
