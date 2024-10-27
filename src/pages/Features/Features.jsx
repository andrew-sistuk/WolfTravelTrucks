//!react and libraries
//!styles
import css from './Features.module.css';
//!component
import {Details} from 'containers';
import BookForm from '../../components/BookForm/BookForm.jsx';
import ownPropertyList from '../../helpers/ownProperty.js';
import {useSelector} from 'react-redux';
import {selectCamper} from '../../myRedux/campers/selectors.js';
import {nanoid} from 'nanoid';
import EquipmentList from '../../components/EquipmentList/EquipmentList.jsx'; //!helpers
//!helpers
//!assets
//!myRedux

export function Features() {
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

export default Features;
