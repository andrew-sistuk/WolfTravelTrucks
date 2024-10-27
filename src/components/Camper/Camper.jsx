import { useDispatch, useSelector } from 'react-redux';

import css from './Camper.module.css';
import { ButtonLink, EquipmentList, UserRatingData } from 'components';

import { convertPrice, ownPropertyList } from 'helpers';

import { DefaultImg, Heart, HeartActive } from 'assets';

import { selectFavorites, toggleFavorite } from 'myRedux';

export function Camper({ camper }) {
  const { id, gallery, name, price, reviews, rating, location, description } =
    camper;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  return (
    <li className={css.item} key={id}>
      <img
        className={css.img}
        src={gallery[0] ? gallery[0].thumb : DefaultImg}
        alt={name}
        loading="lazy"
      />
      <div className={css.data}>
        <div>
          <div className={css['main-data']}>
            <h3 className={css.header}>{name}</h3>
            <div className={css['price-data']}>
              <p className={css.price}>{convertPrice(price)}</p>
              <button
                className={css.heart}
                type="button"
                onClick={() => dispatch(toggleFavorite(id))}
              >
                {favorites[id] ? (
                  <HeartActive width={24} heigth={24} />
                ) : (
                  <Heart width={24} heigth={24} />
                )}
              </button>
            </div>
          </div>
          <UserRatingData
            rating={rating}
            reviews={reviews}
            location={location}
            to={`${id}\\reviews`}
          />
          <p className={css.description}>{description}</p>
          <EquipmentList categories={ownPropertyList(camper, 'equipment')} />
        </div>
        <ButtonLink to={`/campers/${id}`} value="Show more" />
      </div>
    </li>
  );
}
