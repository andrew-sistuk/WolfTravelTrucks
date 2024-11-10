import { useSelector } from 'react-redux';
import css from './CampersList.module.css';

import { Camper } from 'components';
import {
  selectCampersError,
  selectCampersLoading,
  selectFilteredAndPaginationCampers,
} from 'myRedux';

export function CampersList() {
  const campers = useSelector(selectFilteredAndPaginationCampers);

  const loading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  return error ? (
    <p className={css['warning-message']}>Something went wrong</p>
  ) : loading ? (
    <p className={css['warning-message']}>Loading...</p>
  ) : campers.length ? (
    <ul className={css['list-cars']}>
      {campers.map(camper => (
        <Camper key={camper.id} camper={camper} />
      ))}
    </ul>
  ) : (
    <p className={css['warning-message']}>
      It looks like there is no data yet for your settings.Try other settings or
      check back later !
    </p>
  );
}
