import { useSelector } from 'react-redux';
import css from './CampersList.module.css';

import { Camper } from 'components';

import { selectFilteredAndPaginationCampers } from '../../myRedux/pagination/selectors.js';

export function CampersList() {
  const campers = useSelector(selectFilteredAndPaginationCampers);
  return (
    <ul className={css['list-cars']}>
      {campers.length ? (
        campers.map(camper => <Camper key={camper.id} camper={camper} />)
      ) : (
        <p className={css['warning-message']}>
          It looks like there is no data yet for your settings. Try other
          settings or check back later!
        </p>
      )}
    </ul>
  );
}
