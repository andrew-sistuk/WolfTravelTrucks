import css from './EquipmentList.module.css';
import { nanoid } from 'nanoid';
import Equipment from '../Equipment/Equipment.jsx';
import { EquipmentIcons } from '../../helpers/constants/EquipmentIcons.jsx';

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
