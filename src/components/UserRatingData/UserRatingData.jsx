import { Link } from 'react-router-dom';
import css from '../Camper/Camper.module.css';

import { Map, Star } from 'assets';

export function UserRatingData({ rating, reviews, location, to }) {
  return (
    <div className={css['user-data']}>
      <div className={css.rating}>
        <Star width={16} heigth={16} />
        <Link
          className={css['user-rating']}
          to={`/campers/${to}`}
        >{`${rating} (${reviews.length} reviews)`}</Link>
      </div>
      <a
        className={css['location-container']}
        href={`https://www.google.com/maps/search/?api=1&query=${location}`}
        target="_blank"
      >
        <Map width={16} heigth={16} />
        <p className={css.location}>{location}</p>
      </a>
    </div>
  );
}
