import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.scss";
import Logo from "./logo.png";

const navigation = () => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.Main}>
        <Link to="/">
          <img src={Logo} alt="GOT" />
        </Link>
      </div>
      <ul className={classes.Nav}>
        <li>
          <Link to="/books">BOOKS</Link>
        </li>
        <li>
          <Link to="/characters">CHARACTERS</Link>
        </li>
        <li>
          <Link to="/houses">HOUSES</Link>
        </li>
      </ul>
    </div>
  );
};

export default navigation;
