//!react and libraries
import { useSelector } from 'react-redux';
//!styles
import css from './ListCampers.module.css';
//!component
import Camper from '../Camper/Camper.jsx';
//!helpers
//!assets
//!myRedux
import { selectCampers } from '../../myRedux/campers/selectors.js';

function ListCampers() {
  const campers = useSelector(selectCampers);
  return (
    <ul className={css['list-cars']}>
      {campers.map(item => (
        <Camper key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ListCampers;
