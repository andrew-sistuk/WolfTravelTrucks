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
import CategoryList from '../CategoryList/CategoryList.jsx';
import ownPropertyList from '../../helpers/ownProperty.js';
//!assets
import DefaultImg from '/favicon.webp';

//!myRedux

function Camper({ camper }) {
  const { id, gallery, name, price, reviews, rating, location, description } =
    camper;

  return (
    <li className={css.item} key={id}>
      <img
        className={css.img}
        src={gallery[0] ? gallery[0].thumb : DefaultImg}
        alt={name}
      />
      <div className={css.data}>
        <div>
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
          <CategoryList categories={ownPropertyList(camper, 'equipment')} />
        </div>
        <ButtonLink to={id} value="Show more" />
      </div>
    </li>
  );
}

export default Camper;
