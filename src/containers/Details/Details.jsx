import css from './Details.module.css';

export function Details({ header, children }) {
  return (
    <section className={css.details}>
      <h2 className="visually-hidden">{header}</h2>
      {children}
    </section>
  );
}
