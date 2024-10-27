import Select, { components } from 'react-select';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Controller, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filters.module.css';
import 'react-tooltip/dist/react-tooltip.css';

import { Button, FilterItem, selectStyles } from 'components';

import { EquipmentIcons } from '../../helpers/constants/EquipmentIcons.jsx';
import { TypeIcons } from '../../helpers/constants/TypeIcons.jsx';

import Map from '../../assets/icons/map.svg?react';
import {
  selectCamperLocations,
  selectEquipments,
  selectTypes,
} from '../../myRedux/campers/selectors.js';

import {
  selectFilterEquipments,
  selectFilterLocations,
  selectFilterType,
} from '../../myRedux/filters/selectors.js';
import { filterCampers } from '../../myRedux/filters/slice.js';
import { defaultPerPage } from '../../myRedux/pagination/slice.js';

export function Filters() {
  const locations = useSelector(selectCamperLocations);
  const equipments = useSelector(selectEquipments);
  const types = useSelector(selectTypes);

  const defaultLocations = useSelector(selectFilterLocations);
  const defaultEquipments = useSelector(selectFilterEquipments);
  const defaultType = useSelector(selectFilterType);

  const dispatch = useDispatch();

  const { register, control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      location: defaultLocations,
      equipments: defaultEquipments,
      type: defaultType,
    },
    shouldUnregister: true,
  });

  function onSubmit(form) {
    dispatch(filterCampers(form));
    dispatch(defaultPerPage());
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
      <label
        className={css['label-location']}
        data-tooltip-id="my-tooltip-locations"
        htmlFor="location"
      >
        Location
      </label>
      <ReactTooltip
        id="my-tooltip-locations"
        variant="dark"
        place="right-end"
        content="Check locations would you want search"
      />
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
            // defaultValue={locations}
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

      <label
        className={css['label-filters']}
        data-tooltip-id="my-tooltip-filters"
      >
        Filters
      </label>
      <ReactTooltip
        id="my-tooltip-filters"
        variant="dark"
        place="right-end"
        content="Check filters would you want search"
      />
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
        content="Check one or more equipment"
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
                onChange={() => {
                  setValue('type', watch('type') === value ? null : value);
                }}
              />
            </li>
          ))}
        </ul>
      </fieldset>
      <ReactTooltip
        id="my-tooltip-type"
        variant="dark"
        place="right-end"
        content="Check type camper"
      />
      <Button type="submit" value="Search" form="filters" />
    </form>
  );
}

export default Filters;
