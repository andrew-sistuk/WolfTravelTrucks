//!
//!react and libraries
//!
import {TiShoppingCart} from 'react-icons/ti';
//!
//!styles
//!
import css from './Favorites.module.css';
//!
//!component
//!
//!
//!helpers
//!
import ownPropertyList from '../../helpers/ownProperty.js';
//!
//!assets
//!
//!
//!myRedux
//!
import {useSelector} from 'react-redux';
import {selectFavorites} from '../../myRedux/favorites/selectors.js';

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
