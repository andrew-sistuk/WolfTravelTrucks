import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import css from './Reviews.module.css';
import { BookForm } from 'components';
import { Details } from 'containers';

import Star from '../../assets/icons/yellow-star.svg?react';
import GrayStar from '../../assets/icons/star.svg?react';

import { selectCamperReviews } from 'myRedux';

export default function Reviews() {
  const reviews = useSelector(selectCamperReviews);

  function ratingToStars(rating) {
    const stars = [];
    for (let index = 0; index < 5; index++) {
      if (index < rating) {
        stars.push(<Star key={nanoid()} width={16} height={16} />);
      } else {
        stars.push(<GrayStar key={nanoid()} width={16} height={16} />);
      }
    }

    return stars;
  }

  return (
    <Details header="Features">
      <ul className={css.comments}>
        {reviews.map(({ id, reviewer_name, reviewer_rating, comment }) => (
          <li className={css.comment} key={id}>
            <div className={css.details}>
              <div className={css.avatar}>
                <p className={css.letter}>{reviewer_name[0]}</p>
              </div>
              <div>
                <p className={css.name}>{reviewer_name}</p>
                <div className={css.stars}>
                  {ratingToStars(reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={css.description}>{comment}</p>
          </li>
        ))}
      </ul>
      <BookForm />
    </Details>
  );
}
