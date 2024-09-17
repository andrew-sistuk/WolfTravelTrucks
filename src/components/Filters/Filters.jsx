//!react and libraries
import Select, { components } from 'react-select';
// import makeAnimated from 'react-select/animated';
//!styles
import css from './Filters.module.css';
//!component
import Button from '../Buttons/Button.jsx';
//!helpers
//!assets
import Map from '../../assets/icons/map.svg?react';
//!myRedux
import { selectLocations } from '../../myRedux/campers/selectors.js';
import { useSelector } from 'react-redux';
import { selectStyles } from './selectStyles.js';

function Filters({ onClick }) {
  // const animatedComponents = makeAnimated();
  const locations = useSelector(selectLocations);

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

      <label htmlFor="">
        <input type="radio" name="equipment" value="ac" />
        AC
      </label>
      <label htmlFor="">
        <input type="radio" name="equipment" value="automatic" />
        Automatic
      </label>
      <label htmlFor="">
        <input type="radio" name="equipment" value="kitchen" />
        Kitchen
      </label>
      <label htmlFor="">
        <input type="radio" name="equipment" value="tv" />
        TV
      </label>
      <label htmlFor="">
        <input type="radio" name="equipment" value="bathroom" />
        Bathroom
      </label>
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
