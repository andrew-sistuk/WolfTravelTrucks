import React from 'react';
import {Link} from "react-router-dom";
import css from "./Buttons.module.css";

function ButtonLink({to, value}) {
    return (
        <Link to={to} className={css.button}>{value}</Link>
    );
}

export default ButtonLink;