//!
//!react and libraries
//!
import {useSelector} from 'react-redux'; //!
//!styles
//!
import css from './FullPhoto.module.css'; //!
//!component
//!
//!
//!helpers
//!
//!
//!assets
//!
//!
//!myRedux
//!
import {selectModal} from '../../myRedux/campers/selectors.js';

function FullPhoto() {
  const modal = useSelector(selectModal);
  return (
    <div className={css['full-photo-container']}>
      <img className={css.photo} src={modal.photo} alt={modal.type} />
    </div>
  );
}

export default FullPhoto;
