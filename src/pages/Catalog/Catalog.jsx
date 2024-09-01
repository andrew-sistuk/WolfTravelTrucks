import Container from '../../components/Container/Container.jsx';
import css from './Catalog.module.css';
import ListCampers from '../../components/ListCampers/ListCampers.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Message from '../../components/Message/Message.jsx';

function handleClick() {}

function Catalog() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
        );
        setItems(response.data.items);
        console.log(response.data);
      } catch (e) {
        console.log(e.toString());
      }
    };
    getItems();
  });
  return (
    <section>
      <Container className={css.catalog}>
        <h2 className={css['visually-hidden']}>Catalog</h2>
        <Filters onClick={handleClick} />
        <ListCampers items={items} />
      </Container>
      <Message />
    </section>
  );
}

export default Catalog;
