//!react and libraries
import { useEffect } from 'react'; //!styles
import css from './Catalog.module.css'; //!component
import Message from '../../components/Message/Message.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import Container from '../../сontainers/Container/Container.jsx';
import ListCampers from '../../components/ListCampers/ListCampers.jsx'; //!helpers
//!assets
//!myRedux
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../myRedux/campers/operations.js';

function handleSubmit(event, form) {
  console.log(event);
  event.preventDefault();
  form.reset();
}

function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section>
      <h2 className="visually-hidden">Catalog</h2>
      <Container className={css.catalog}>
        <Filters onSubmit={handleSubmit} />
        <ListCampers />
      </Container>
      <Message />
    </section>
  );
}

export default Catalog;
