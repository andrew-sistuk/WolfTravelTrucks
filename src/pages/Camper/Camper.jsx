import { Suspense, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import css from '../Camper/Camper.module.css';

import { Container } from 'containers';
import { Loader, UserRatingData } from 'components';

import convertPrice from '../../helpers/convertPrice.js';
import { useModal } from '../../helpers/context/modalContext.js';

import { fetchCamper, selectCamper } from 'myRedux';

export default function Camper() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const { setModal } = useModal();

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [id, dispatch]);

  const { name, reviews, rating, location, price, gallery, description } =
    camper;

  function handleClick(photo) {
    setModal({
      isOpen: true,
      type: 'photo',
      photo: photo,
    });
  }

  const handleClassLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <section>
      <h2 className="visually-hidden">Catalog</h2>
      <Container className={css.camper}>
        <h2 className={css.header}>{name}</h2>
        <UserRatingData
          rating={rating}
          reviews={reviews}
          location={location}
          to="reviews"
        />
        <p className={css.price}>{convertPrice(price)}</p>
        <ul className={css.gallery}>
          {gallery.map(({ id, thumb, original }) => (
            <li className={css['photo-container']} key={id}>
              <button
                className={css['open-modal']}
                onClick={() => handleClick(original)}
              >
                <img className={css.img} src={thumb} alt={name} />
              </button>
            </li>
          ))}
        </ul>
        <p className={css.description}>{description}</p>
        <ul className={css['list-links-details']}>
          <li>
            <NavLink className={handleClassLink} to="features">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className={handleClassLink} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </section>
  );
}
