import React from "react";

import classes from "./Home.module.scss";
import map from "./map.webp";

const home = () => {
  return (
    <div className={classes.Home}>
      <h1 className={classes.Heading}>Game of Thrones World Map</h1>
      <img src={map} alt="Game of Thrones World Map" />
      <p>
        <a
          href="https://awoiaf.westeros.org/index.php/World_Map_(HBO_Game_Of_Thrones)"
          target="_blank"
          rel="noopener noreferrer">
          Read More
        </a>
      </p>
    </div>
  );
};

export default home;
