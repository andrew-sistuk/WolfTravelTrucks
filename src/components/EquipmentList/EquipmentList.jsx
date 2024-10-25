//!
//!react and libraries
//!
import {nanoid} from 'nanoid';
//!
//!styles
//!
import css from './EquipmentList.module.css';
//!
//!component
//!
import Equipment from '../Equipment/Equipment.jsx';
//!
//!helpers
//!
import {EquipmentIcons} from '../../helpers/constants/EquipmentIcons.jsx';
//!
//!assets
//!
//!
//!myRedux
//!

function EquipmentList({ categories }) {
  return (
    <ul className={css['equipment-list']}>
      {categories.map(
        ([id = nanoid(), key, value]) =>
          value && (
            <li className={css.equipment} key={id}>
              <Equipment
                Icon={key && EquipmentIcons[key.toLowerCase()]}
                text={key}
              />
            </li>
          )
      )}
    </ul>
  );
}

export default EquipmentList;
