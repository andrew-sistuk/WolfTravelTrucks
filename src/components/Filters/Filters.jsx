import css from '../../pages/Catalog/Catalog.module.css';
import Button from '../Buttons/Button.jsx';

function Filters({ onClick }) {
  return (
    <form className={css.filters}>
      <label className={css.label}>Location</label>
      <select name="location">
        <option value="default">-</option>
      </select>
      <label className={css.label}>Filters</label>
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
