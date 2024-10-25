import css from './Favorites.module.css';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../myRedux/favorites/selectors.js';
import ownPropertyList from '../../helpers/ownProperty.js';
import { TiShoppingCart } from 'react-icons/ti';

function Favorites() {
  const favorites = useSelector(selectFavorites);
  const countFavorites = ownPropertyList(favorites, 'count').length;

  return (
    <button className={css.favorites} type="button" onClick={() => {}}>
      <TiShoppingCart size={32} />
      {!!countFavorites && (
        <p className={css['count-favorites']}>{countFavorites}</p>
      )}
    </button>
  );
}

export default Favorites;
