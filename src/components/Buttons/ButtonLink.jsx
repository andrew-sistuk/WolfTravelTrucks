//!react and libraries
import { Link } from 'react-router-dom';
//!styles
import css from './Buttons.module.css';
//!component
//!helpers
//!myRedux

function ButtonLink({ to, value }) {
  return (
    <Link to={to} className={css.button}>
      {value}
    </Link>
  );
}

export default ButtonLink;
