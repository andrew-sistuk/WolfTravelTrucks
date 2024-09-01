import css from './Camper.module.css';
import numeral from 'numeral';
import Heart from '../../assets/icons/heart.svg?react';
import HeartActive from '../../assets/icons/heart-active.svg?react';
import Map from '../../assets/icons/map.svg?react';
import ReactStars from 'react-rating-stars-component/dist/react-stars.js';
import { toast } from 'react-toastify';

function Camper({ item }) {
  const { gallery, name, price, reviews, rating, location } = item;

  function ratingChanged() {
    toast('Rating sending');
  }

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
        <div className={css['user-data']}>
          <p className={css.rating}>
            {
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={16}
                activeColor="#ffc531"
              />
            }
            {`${rating} (${reviews.length} reviews)`}
          </p>
          <div className={css['location-container']}>
            <Map width={16} heigth={16} />
            <p className={css.location}>{location}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Camper;
