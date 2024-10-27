//!react and libraries
import { useSelector } from 'react-redux'; //!styles
import css from './FavoritesList.module.css'; //!component
import Camper from '../Camper/Camper.jsx'; //!helpers
//!assets
//!myRedux
import { selectFavoritesCampers } from '../../myRedux/favorites/selectors.js';

export function FavoritesList() {
  const favorites = useSelector(selectFavoritesCampers);
  return (
    <ul className={css['favorites-cars']}>
      {favorites.length ? (
        favorites.map(camper => <Camper key={camper.id} camper={camper} />)
      ) : (
        <p className={css['warning-message']}>
          Your favorites list is empty. Add something interesting and we&#39;ll
          save it here!
        </p>
      )}
    </ul>
  );
}

export default FavoritesList;