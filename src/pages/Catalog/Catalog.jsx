//!react and libraries
import { useEffect } from 'react';
//!styles
import css from './Catalog.module.css';
//!component
import Message from '../../components/Message/Message.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import Container from '../../сontainers/Container/Container.jsx';
import Button from '../../components/Buttons/Button.jsx';
import ListCampers from '../../components/ListCampers/ListCampers.jsx';
//!helpers
//!assets
//!myRedux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../myRedux/campers/operations.js';
import { paginationPage } from '../../myRedux/pagination/slice.js';
import { selectPerPage } from '../../myRedux/pagination/selectors.js';
import { selectTotal } from '../../myRedux/filters/selectors.js';
import Favorites from '../../components/Favorites/Favorites.jsx';

function Catalog() {
  const dispatch = useDispatch();
  const perPage = useSelector(selectPerPage);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section>
      <h2 className="visually-hidden">Catalog</h2>
      <Container className={css.catalog}>
        <Filters />
        <div className={css['container-catalog-list']}>
          <ListCampers />
          {perPage < total && (
            <Button
              type="button"
              onClick={() => dispatch(paginationPage())}
              value="Load more"
              style={css['load-more']}
            />
          )}
          <Favorites />
        </div>
      </Container>
      <Message />
    </section>
  );
}

export default Catalog;
