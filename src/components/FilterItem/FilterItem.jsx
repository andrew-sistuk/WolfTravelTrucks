import css from './FilterItem.module.css';
import { splitCamelCase } from '../../helpers/splitCamelCase.js';

function FilterItem({ Icon, value, type, name }) {
  return (
    <>
      <input
        className={css.checkbox}
        type={type}
        name={name}
        id={value}
        value={value}
      />
      <label className={css.container} htmlFor={value}>
        {Icon && <Icon className={css.icon} width={32} height={32} />}
        <p className={css.text}>{splitCamelCase(value)}</p>
      </label>
    </>
  );
}

export default FilterItem;
