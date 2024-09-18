import React from 'react';
import css from './RadioButton.module.css';

function RadioButton({ Icon, text }) {
  return (
    <label>
      <input type="radio" name="" id="" />
      <div>
        {/*<Icon />*/}
        <p className={css.text}>{text}</p>
      </div>
    </label>
  );
}

export default RadioButton;
