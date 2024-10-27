import { useSelector } from 'react-redux';
import { TiShoppingCart } from 'react-icons/ti';

import css from './FavoritesButton.module.css';
//!
//!component
//!
//!
//!helpers
//!
import ownPropertyList from '../../helpers/ownProperty.js';
import { useModal } from '../../helpers/context/modalContext.js';
//!
//!assets
//!
//!
//!myRedux
//!
import { selectFavorites } from '../../myRedux/favorites/selectors.js';

export function FavoritesButton() {
  const favorites = useSelector(selectFavorites);
  const countFavorites = ownPropertyList(favorites, 'count').length;
  const { setModal } = useModal();

  return (
    <button
      className={css.favorites}
      type="button"
      onClick={() => {
        setModal({
          isOpen: true,
          type: 'favorites',
        });
      }}
    >
      <TiShoppingCart size={32} />
      {!!countFavorites && (
        <p className={css['count-favorites']}>{countFavorites}</p>
      )}
    </button>
  );
}
