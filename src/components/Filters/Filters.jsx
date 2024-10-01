//!react and libraries
import Select, { components } from 'react-select';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Controller, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
//!styles
import css from './Filters.module.css';
import 'react-tooltip/dist/react-tooltip.css';
import { selectStyles } from './selectStyles.js';
//!component
import Button from '../Buttons/Button.jsx';
import FilterItem from '../FilterItem/FilterItem.jsx';
//!helpers
import { EquipmentIcons } from '../../helpers/constants/EquipmentIcons.jsx';
import { TypeIcons } from '../../helpers/constants/TypeIcons.jsx';
//!assets
import Map from '../../assets/icons/map.svg?react';
//!myRedux
import {
  selectEquipments,
  selectLocations,
  selectTypes,
} from '../../myRedux/campers/selectors.js';
import { filterCampers } from '../../myRedux/filters/slice.js';

function Filters() {
  const locations = useSelector(selectLocations);
  const equipments = useSelector(selectEquipments);
  const types = useSelector(selectTypes);
  const dispatch = useDispatch();

  const { register, control, handleSubmit } = useForm();

  function onSubmit(form) {
    dispatch(filterCampers(form));
    console.log(form);
  }

  const CustomPlaceholder = props => (
    <components.Placeholder {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Map width={20} heigth={20} style={{ marginRight: 8 }} />
        {props.children}
      </div>
    </components.Placeholder>
  );

  return (
    <form
      className={css.filters}
      onSubmit={handleSubmit(onSubmit)}
      id="filters"
    >
      <label className={css['label-location']} htmlFor="location">
        Location
      </label>
      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
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
        )}
      />

      <label className={css['label-filters']}>Filters</label>
      <fieldset className={clsx(css.set, css.equipment)}>
        <legend
          className={css['header-set']}
          data-tooltip-id="my-tooltip-equipment"
        >
          Vehicle equipment
        </legend>
        <ul className={css['list-filters']}>
          {equipments.map(([id, value]) => (
            <li className={css['relative-container']} key={id}>
              <FilterItem
                Icon={value && EquipmentIcons[value.toLowerCase()]}
                value={value}
                type="checkbox"
                name="equipments"
                register={register}
              />
            </li>
          ))}
        </ul>
      </fieldset>
      <ReactTooltip
        id="my-tooltip-equipment"
        variant="dark"
        place="right-end"
        content="Check all equipment would you want search"
      />
      <fieldset className={clsx(css.set, css.type)}>
        <legend className={css['header-set']} data-tooltip-id="my-tooltip-type">
          Vehicle type
        </legend>
        <ul className={css['list-filters']}>
          {types.map(([id, value]) => (
            <li className={css['relative-container']} key={id}>
              <FilterItem
                Icon={value && TypeIcons[value]}
                value={value}
                type="radio"
                name="type"
                register={register}
              />
            </li>
          ))}
        </ul>
      </fieldset>
      <ReactTooltip
        id="my-tooltip-type"
        variant="dark"
        place="right-end"
        content="Check type would you want search"
      />
      <Button type="submit" value="Search" form="filters" />
    </form>
  );
}

export default Filters;
