import css from '../Camper/Camper.module.css';
import ReactStars from 'react-rating-stars-component';
import Map from '../../assets/icons/map.svg?react';
import { toast } from 'react-toastify';

function UserRatingData({ rating, reviewsCount, location }) {
  const ratingChanged = newRating => {
    toast(`Rating sending: ${newRating}`);
  };

  return (
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
        {`${rating} (${reviewsCount} reviews)`}
      </p>
      <div className={css['location-container']}>
        <Map width={16} heigth={16} />
        <p className={css.location}>{location}</p>
      </div>
    </div>
  );
}

export default UserRatingData;
