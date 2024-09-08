//!react and libraries
//!styles
import css from './NotFound.module.css';
//!component
//!helpers
//!assets
//!assets
import NotFoundImg from '../../assets/img/404.jpg';

//!myRedux

function NotFound() {
  return <img src={NotFoundImg} alt="Not found" className={css['not-found']} />;
}

export default NotFound;
