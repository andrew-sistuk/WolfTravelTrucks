import css from './ListCampers.module.css';
import Camper from '../Camper/Camper.jsx';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors.js';

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
