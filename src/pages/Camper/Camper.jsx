import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Camper/Camper.module.css';
import Container from '../../components/Container/Container.jsx';
import UserRatingData from '../../components/UserRatingData/UserRatingData.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../redux/camper/operations.js';
import { selectCamper } from '../../redux/camper/selectors.js';

function Camper() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [id, dispatch]);

  const { name, reviews, rating, location } = camper;
  return (
    <Container className={css.camper}>
      <h2>{name}</h2>
      <UserRatingData rating={rating} reviews={reviews} location={location} />
    </Container>
  );
}

export default Camper;
