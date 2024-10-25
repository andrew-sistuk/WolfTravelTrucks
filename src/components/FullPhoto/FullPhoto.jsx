//!
//!react and libraries
//!
import {useSelector} from 'react-redux';
//!
//!styles
//!
//!
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
  return <img src={modal.photo} alt={modal.type} />;
}

export default FullPhoto;
