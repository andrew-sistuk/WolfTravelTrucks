//!react and libraries
//!styles
import css from './Details.module.css';
//!component
//!helpers
//!assets
//!myRedux

function Details({ header, children }) {
  return (
    <section className={css.details}>
      <h2 className="visually-hidden">{header}</h2>
      {children}
    </section>
  );
}

export default Details;
