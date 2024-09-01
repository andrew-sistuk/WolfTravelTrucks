import numeral from 'numeral';
import ButtonLink from '../Buttons/ButtonLink.jsx';
import UserRatingData from '../UserRatingData/UserRatingData.jsx';

import css from './Camper.module.css';

import Heart from '../../assets/icons/heart.svg?react';
import HeartActive from '../../assets/icons/heart-active.svg?react';

function Camper({ item }) {
  const { id, gallery, name, price, reviews, rating, location, description } =
    item;

  return (
    <li className={css.item}>
      <img className={css.img} src={gallery[0].original} alt={name} />
      <div className={css.data}>
        <div className={css['main-data']}>
          <h3 className={css.header}>{name}</h3>
          <div className={css['price-data']}>
            <p className={css.price}>{`€${numeral(price).format('0.00')}`}</p>
            {name ? (
              <Heart width={24} heigth={24} />
            ) : (
              <HeartActive width={24} heigth={24} />
            )}
          </div>
        </div>
        <UserRatingData
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
        />
        <p className={css.description}>{description}</p>
        <div className={css.categories}></div>
        <ButtonLink to={id} value="Show more" />
      </div>
    </li>
  );
}

export default Camper;
