import { useSelector } from 'react-redux';
import { TiShoppingCart } from 'react-icons/ti';

import css from './FavoritesButton.module.css';

import { ownPropertyList, useModal } from 'helpers';

import { selectFavorites } from 'myRedux';

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
