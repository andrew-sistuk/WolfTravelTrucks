//!
//!react and libraries
//!
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
import {useModal} from '../../helpers/context/modalContext.js';

function FullPhoto() {
  const { modal } = useModal();

  return (
    <div className={css['full-photo-container']}>
      <img className={css.photo} src={modal.data} alt={modal.data} />
    </div>
  );
}

export default FullPhoto;
