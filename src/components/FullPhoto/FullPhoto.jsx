import { useSelector } from 'react-redux';
import { selectModal } from '../../myRedux/campers/selectors.js';

function FullPhoto() {
  const modal = useSelector(selectModal);
  return <img src={modal.photo} alt={modal.type} />;
}

export default FullPhoto;
