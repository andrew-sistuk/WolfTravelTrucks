import css from '../Camper/Camper.module.css';
import ReactStars from 'react-stars';
import Map from '../../assets/icons/map.svg?react';
import { toast } from 'react-toastify';

function UserRatingData({ rating, reviews = [], location }) {
  const ratingChanged = newRating => {
    toast(`Rating sending: ${newRating}`);
  };

  return (
    <div className={css['user-data']}>
      <div className={css.rating}>
        {
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            half={true}
            color1={'#6c717b'}
            color2={'#ffd700'}
          />
        }
        <p>{`${rating} (${reviews.length} reviews)`}</p>
      </div>
      <div className={css['location-container']}>
        <Map width={16} heigth={16} />
        <p className={css.location}>{location}</p>
      </div>
    </div>
  );
}

export default UserRatingData;
