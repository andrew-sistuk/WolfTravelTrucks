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
//!assets
//!myRedux

function Camper({ item }) {
  const { id, gallery, name, price, reviews, rating, location, description } =
    item;

  return (
    <li className={css.item} key={id}>
      <img className={css.img} src={gallery[0].thumb} alt={name} />
      <div className={css.data}>
        <div className={css['main-data']}>
          <h3 className={css.header}>{name}</h3>
          <div className={css['price-data']}>
            <p className={css.price}>{convertPrice(price)}</p>
            {name ? (
              <Heart width={24} heigth={24} />
            ) : (
              <HeartActive width={24} heigth={24} />
            )}
          </div>
        </div>
        <UserRatingData
          rating={rating}
          reviews={reviews}
          location={location}
          to={`${id}\\reviews`}
        />
        <p className={css.description}>{description}</p>
        <div className={css.categories}></div>
        <ButtonLink to={id} value="Show more" />
      </div>
    </li>
  );
}

export default Camper;
