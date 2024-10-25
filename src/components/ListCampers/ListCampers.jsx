//!react and libraries
import { useSelector } from 'react-redux';
//!styles
import css from './ListCampers.module.css';
//!component
import Camper from '../Camper/Camper.jsx';
//!helpers
//!assets
//!myRedux
import { selectFilteredAndPaginationCampers } from '../../myRedux/pagination/selectors.js';

function ListCampers() {
  const campers = useSelector(selectFilteredAndPaginationCampers);
  return (
    <ul className={css['list-cars']}>
      {campers.map(camper => (
        <Camper key={camper.id} camper={camper} />
      ))}
    </ul>
  );
}

export default ListCampers;
