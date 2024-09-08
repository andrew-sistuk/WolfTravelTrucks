//!react and libraries
import ReactModal from 'react-modal';
//!styles
import css from './Modal.module.css';
//!component
import { MdOutlineClose } from 'react-icons/md'; //!helpers
//!assets
//!myRedux
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../myRedux/campers/slice.js';
import { selectModal } from '../../myRedux/campers/selectors.js';
import FullPhoto from '../FullPhoto/FullPhoto.jsx';

ReactModal.setAppElement('body');

function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  function renderContentModal() {
    if (!modal) return null;
    if (modal.type === 'photo') return <FullPhoto />;
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
