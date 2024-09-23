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
  selectEquipments,
  selectLocations,
  selectTypes,
} from '../../myRedux/campers/selectors.js';
import { useSelector } from 'react-redux';
import { selectStyles } from './selectStyles.js';
import FilterItem from '../FilterItem/FilterItem.jsx';
import clsx from 'clsx';
import { EquipmentIcons } from '../../helpers/constants/EquipmentIcons.jsx';
import { TypeIcons } from '../../helpers/constants/TypeIcons.jsx';

function Filters({ onSubmit }) {
  const locations = useSelector(selectLocations);
  const equipments = useSelector(selectEquipments);
  const types = useSelector(selectTypes);

  const CustomPlaceholder = props => (
    <components.Placeholder {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Map width={20} heigth={20} style={{ marginRight: 8 }} />
        {props.children}
      </div>
    </components.Placeholder>
  );

  return (
    <form className={css.filters} onSubmit={onSubmit} id="filters">
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
            primary25: '#E44848',
            primary: '#E44848',
          },
        })}
        isMulti
        isClearable
        isSearchable
        closeMenuOnSelect={false}
        options={locations}
        components={{ Placeholder: CustomPlaceholder }}
        placeholder="Search..."
        name="location"
        form="filters"
      />
      <label className={css['label-filters']}>Filters</label>
      <fieldset className={clsx(css.set, css.equipment)}>
        <legend className={css['header-set']}>Vehicle equipment</legend>
        <ul className={css['list-filters']}>
          {equipments.map(([id, value]) => (
            <li className={css['relative-container']} key={id}>
              <FilterItem
                Icon={value && EquipmentIcons[value.toLowerCase()]}
                value={value}
                type="checkbox"
                name="equipment"
              />
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset className={clsx(css.set, css.type)}>
        <legend className={css['header-set']}>Vehicle type</legend>
        <ul className={css['list-filters']}>
          {types.map(([id, value]) => (
            <li className={css['relative-container']} key={id}>
              <FilterItem
                Icon={value && TypeIcons[value]}
                value={value}
                type="radio"
                name="type"
              />
            </li>
          ))}
        </ul>
      </fieldset>
      <Button type="submit" value="Search" form="filters" />
    </form>
  );
}

export default Filters;
