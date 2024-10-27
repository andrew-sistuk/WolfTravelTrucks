import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Catalog.module.css';

import { Container } from 'containers';
import {
  Button,
  CampersList,
  FavoritesButton,
  Filters,
  Message,
} from 'components';

import {
  fetchCampers,
  paginationPage,
  selectPerPage,
  selectTotal,
} from 'myRedux';

export default function Catalog() {
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
          <CampersList />
          {perPage < total && (
            <Button
              type="button"
              onClick={() => dispatch(paginationPage())}
              value="Load more"
              style={css['load-more']}
            />
          )}
          <FavoritesButton />
        </div>
      </Container>
      <Message />
    </section>
  );
}
