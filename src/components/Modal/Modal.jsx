//!
//!react and libraries
//!
import ReactModal from 'react-modal';
import {useDispatch, useSelector} from 'react-redux'; //!
//!styles
//!
import css from './Modal.module.css'; //!
//!component
//!
import {MdOutlineClose} from 'react-icons/md';
import FullPhoto from '../FullPhoto/FullPhoto.jsx';
import FavoritesList from '../FavoritesList/FavoritesList.jsx'; //!
//!helpers
//!
//!
//!assets
//!
//!
//!myRedux
//!
import {toggleModal} from '../../myRedux/campers/slice.js';
import {selectModal} from '../../myRedux/campers/selectors.js';

ReactModal.setAppElement('#root');

function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  function renderContentModal() {
    if (!modal) return null;
    if (modal.type === 'photo') return <FullPhoto />;
    if (modal.type === 'favorites') return <FavoritesList />;
  }

  function handleClose() {
    dispatch(
      toggleModal({
        isOpen: false,
        type: 'photo',
        photo: null,
      })
    );
  }

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          backgroundColor: 'transparent',
          border: 'transparent',
          overflowY: 'auto',
        },
      }}
      isOpen={modal.isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      preventScroll={true}
      onRequestClose={handleClose}
    >
      <MdOutlineClose className={css.close} onClick={handleClose} />
      {renderContentModal()}
    </ReactModal>
  );
}

export default Modal;
