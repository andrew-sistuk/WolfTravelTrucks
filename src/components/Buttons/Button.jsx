import React from 'react';
import css from './Buttons.module.css';

function Button({type = 'submit', value, onClick}) {
    return (
        <button className={css.button} type={type} onClick={onClick}>{value}</button>
    );
}

export default Button;