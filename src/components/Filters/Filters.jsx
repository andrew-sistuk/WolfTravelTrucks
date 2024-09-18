//!react and libraries
import Select, { components } from 'react-select';
//!styles
import css from './Filters.module.css';
//!component
import Button from '../Buttons/Button.jsx';
//!helpers
//!assets
import Map from '../../assets/icons/map.svg?react';
//!myRedux
import {
  selectEquipment,
  selectLocations,
} from '../../myRedux/campers/selectors.js';
import { useSelector } from 'react-redux';
import { selectStyles } from './selectStyles.js';
import RadioButton from '../RadioButton/RadioButton.jsx';

function Filters({ onClick }) {
  const locations = useSelector(selectLocations);
  const equipment = useSelector(selectEquipment);

  const CustomPlaceholder = props => (
    <components.Placeholder {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Map width={20} heigth={20} style={{ marginRight: 8 }} />
        {props.children}
      </div>
    </components.Placeholder>
  );

  return (
    <form className={css.filters}>
      <label className={css['label-location']} htmlFor="location">
        Location
      </label>
      <Select
        styles={selectStyles}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#d84343',
            primary: '#d84343',
          },
        })}
        isMulti
        isClearable
        isSearchable
        closeMenuOnSelect={false}
        options={locations}
        components={{ Placeholder: CustomPlaceholder }}
        placeholder="Search..."
      />
      <label className={css['label-filters']}>Filters</label>
      <h4>Vehicle equipment</h4>
      <ul>
        {equipment.map(([id, text]) => (
          <li key={id}>
            <RadioButton text={text} />
          </li>
        ))}
      </ul>

      <h4>Vehicle type</h4>
      <label htmlFor="">
        <input type="radio" name="type" value="van" />
        Van
      </label>
      <label htmlFor="">
        <input type="radio" name="type" value="fullyIntegrated" />
        Fully Integrated
      </label>
      <label htmlFor="">
        <input type="radio" name="type" value="alcove" />
        Alcove
      </label>
      <Button type="submit" value="Search" onClick={onClick}></Button>
    </form>
  );
}

export default Filters;
