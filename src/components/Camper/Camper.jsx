//!react and libraries
//!styles
import css from './Camper.module.css';
//!component
import ButtonLink from '../Buttons/ButtonLink.jsx';
import UserRatingData from '../UserRatingData/UserRatingData.jsx';
import Heart from '../../assets/icons/heart.svg?react';
import HeartActive from '../../assets/icons/heart-active.svg?react';
//!helpers
import convertPrice from '../../helpers/convertPrice.js';
import EquipmentList from '../EquipmentList/EquipmentList.jsx';
import ownPropertyList from '../../helpers/ownProperty.js';
//!assets
import DefaultImg from '../../assets/img/404.jpg';
//!myRedux
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../../myRedux/favorites/slice.js';
import {selectFavorites} from '../../myRedux/favorites/selectors.js';

function Camper({ camper }) {
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
        <ButtonLink to={id} value="Show more" />
      </div>
    </li>
  );
}

export default Camper;
