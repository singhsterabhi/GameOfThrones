import React from "react";

import classes from "./Footer.module.scss";

const footer = () => {
  return (
    <div className={classes.Footer}>
      <p>
        Made by <a href="https://singhsterabhi.github.io">SinghsterABHI</a> :
        First of His name, Maker of things, Enthusiast of Technology
      </p>
    </div>
  );
};

export default footer;
