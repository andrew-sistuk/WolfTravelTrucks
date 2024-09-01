import css from './ListCampers.module.css';
import Camper from '../Camper/Camper.jsx';

function ListCampers({ items }) {
  return (
    <ul className={css['list-cars']}>
      {items.map(item => (
        <Camper key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ListCampers;
