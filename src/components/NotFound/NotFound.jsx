import css from './NotFound.module.css';
import NotFoundImg from '../../assets/img/404.jpg';

function NotFound() {
  return <img src={NotFoundImg} alt="Not found" className={css['not-found']} />;
}

export default NotFound;
