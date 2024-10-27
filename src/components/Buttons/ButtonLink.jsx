import { Link } from 'react-router-dom';
import css from './Buttons.module.css';

export function ButtonLink({ to, value }) {
  return (
    <Link to={to} className={css.button}>
      {value}
    </Link>
  );
}
