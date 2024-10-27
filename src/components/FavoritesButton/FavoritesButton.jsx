//!
//!react and libraries
//!
import {TiShoppingCart} from 'react-icons/ti';
//!
//!styles
//!
import css from './FavoritesButton.module.css';
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
import {useDispatch, useSelector} from 'react-redux';
import {selectFavorites} from '../../myRedux/favorites/selectors.js';
import {toggleModal} from '../../myRedux/campers/slice.js';

function FavoritesButton() {
  const favorites = useSelector(selectFavorites);
  const countFavorites = ownPropertyList(favorites, 'count').length;
  const dispatch = useDispatch();

  return (
    <button
      className={css.favorites}
      type="button"
      onClick={() => {
        dispatch(
          toggleModal({
            isOpen: true,
            type: 'favorites',
          })
        );
      }}
    >
      <TiShoppingCart size={32} />
      {!!countFavorites && (
        <p className={css['count-favorites']}>{countFavorites}</p>
      )}
    </button>
  );
}

export default FavoritesButton;
