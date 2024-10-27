import { nanoid } from 'nanoid';
import css from './EquipmentList.module.css';

import { Equipment } from 'components';

import { EquipmentIcons } from 'helpers';

export function EquipmentList({ categories }) {
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
