import { MdOutlineClose } from 'react-icons/md';
import ReactModal from 'react-modal';

import css from './Modal.module.css';

import { FavoritesList, FullPhoto } from 'components';

import { useModal } from 'helpers';

ReactModal.setAppElement('#root');

export function Modal() {
  const { modal, setModal } = useModal();

  function renderContentModal() {
    if (!modal) return null;
    if (modal.type === 'photo') return <FullPhoto />;
    if (modal.type === 'favorites') return <FavoritesList />;
  }

  function handleClose() {
    setModal({
      isOpen: false,
      type: 'photo',
      photo: null,
    });
  }

  return (
    <ReactModal
      className={css.modal}
      overlayClassName={css.overlay}
      contentClassName={css.content}
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
