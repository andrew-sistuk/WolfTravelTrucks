import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from '../Camper/Camper.module.css';
import Container from '../../components/Container/Container.jsx';
import UserRatingData from '../../components/UserRatingData/UserRatingData.jsx';
import Message from '../../components/Message/Message.jsx';

function Camper() {
  const { id } = useParams();
  const [camper, setCamper] = useState({});

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        );
        setCamper(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e.toString());
      }
    };
    getItems();
  }, [id]);

  const { name, reviews, rating, location } = camper;
  return (
    <Container className={css.camper}>
      <h2>{name}</h2>
      <UserRatingData
        rating={rating}
        reviewsCount={reviews.length}
        location={location}
      />
      <Message />
    </Container>
  );
}

export default Camper;
