import React, { Component } from "react";

import classes from "./Home.module.scss";
import map from "./map.webp";

import Spinner from "../Spinner/Spinner";

class Home extends Component {
  state = {
    imageLoading: true
  };
  render() {
    return (
      <div className={classes.Home}>
        <h1 className={classes.Heading}>Game of Thrones World Map</h1>
        <img
          src={map}
          alt="Game of Thrones World Map"
          onLoad={() => this.setState({ imageLoading: false })}
        />
        {this.state.imageLoading ? (
          <Spinner />
        ) : (
          <p>
            <a
              href="https://awoiaf.westeros.org/index.php/World_Map_(HBO_Game_Of_Thrones)"
              target="_blank"
              rel="noopener noreferrer">
              Read More
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default Home;
