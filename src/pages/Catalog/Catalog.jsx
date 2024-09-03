import Container from '../../components/Container/Container.jsx';
import css from './Catalog.module.css';
import ListCampers from '../../components/ListCampers/ListCampers.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect } from 'react';
import Message from '../../components/Message/Message.jsx';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations.js';

function handleClick() {}

function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section>
      <Container className={css.catalog}>
        <h2 className={css['visually-hidden']}>Catalog</h2>
        <Filters onClick={handleClick} />
        <ListCampers />
      </Container>
      <Message />
    </section>
  );
}

export default Catalog;
