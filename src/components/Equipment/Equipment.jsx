import css from './Equipment.module.css';

export function Equipment({ Icon, text }) {
  return (
    <>
      {Icon && <Icon className={css.icon} />}
      <p className={css.text}>{text}</p>
    </>
  );
}
