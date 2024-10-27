import css from './FullPhoto.module.css';
import { useModal } from '../../helpers/context/modalContext.js';

export function FullPhoto() {
  const { modal } = useModal();

  return (
    <div className={css['full-photo-container']}>
      <img className={css.photo} src={modal.data} alt={modal.data} />
    </div>
  );
}
