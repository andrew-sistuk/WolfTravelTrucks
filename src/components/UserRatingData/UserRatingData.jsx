//!
//!react and libraries
//!
import { Link } from 'react-router-dom'; //!
//!styles
//!
import css from '../Camper/Camper.module.css'; //!
//!component
//!
//!
//!helpers
//!
//!
//!assets
//!
import Map from '../../assets/icons/map.svg?react';
import YellowStar from '../../assets/icons/yellow-star.svg?react'; //!
//!
//!myRedux
//!

export function UserRatingData({ rating, reviews, location, to }) {
  return (
    <div className={css['user-data']}>
      <div className={css.rating}>
        <YellowStar width={16} heigth={16} />
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

export default UserRatingData;
