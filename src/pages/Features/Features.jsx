import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

import css from './Features.module.css';

import { Details } from 'containers';
import { BookForm, EquipmentList } from 'components';

import { ownPropertyList } from 'helpers';
import { selectCamper } from 'myRedux';

export default function Features() {
  const camper = useSelector(selectCamper);
  return (
    <Details header="Features">
      <div className={css.features}>
        <EquipmentList categories={ownPropertyList(camper, 'equipment')} />
        <div>
          <h2 className={css.vehicle}>Vehicle details</h2>
          <ul className={css.details}>
            {ownPropertyList(camper, 'details').map(
              ([id = nanoid(), key, value]) => (
                <li className={css['detail-item']} key={id}>
                  <p className={css.key}>{key}</p>
                  <p className={css.value}>{value}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <BookForm />
    </Details>
  );
}
