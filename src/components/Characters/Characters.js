import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";

import classes from "./Characters.module.scss";
import Spinner from "../Spinner/Spinner";

class Characters extends Component {
  state = {};
  componentDidMount() {
    if (!this.props.characters.length) {
      this.props.getMainCharacters();
    }
  }
  render() {
    let el = null;
    if (this.props.characters.length) {
      el = this.props.characters.map(c => (
        <div key={c.name} className={classes.Character}>
          <h3>{c.name}</h3>
          <div>
            {c.born !== "" ? (
              <p>
                <span className={classes.Head}>Born :</span> {c.born}
              </p>
            ) : null}
            {c.culture !== "" ? (
              <p>
                <span className={classes.Head}>Culture :</span> {c.culture}
              </p>
            ) : null}
            {c.titles && c.titles[0] !== "" ? (
              <p>
                <span className={classes.Head}>Titles :</span>{" "}
                {c.titles.join(", ")}
              </p>
            ) : null}
            {c.aliases && c.aliases[0] !== "" ? (
              <p>
                <span className={classes.Head}>Aliases :</span>{" "}
                {c.aliases.join(", ")}
              </p>
            ) : null}
            <p style={{ textAlign: "left" }}>
              <span className={classes.Head}>Played By :</span>{" "}
              {c.playedBy.map(p => (
                <span key={p} className={classes.PlayedBy}>
                  <a
                    className={classes.PlayedBy}
                    href={`https://www.google.com/search?q=${p}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {p}
                  </a>
                  {", "}
                </span>
              ))}
            </p>
            <a
              className={classes.ReadMore}
              href={`https://en.wikipedia.org/wiki/${c.name
                .split(" ")
                .join("_")}`}
              target="_blank"
              rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      ));
    }
    return (
      <div className={classes.Container}>
        <h1 className={classes.Heading}>Characters</h1>
        {el === null ? <Spinner /> : null}
        <div className={classes.Characters}>{el}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMainCharacters: () => dispatch(actions.getMainCharacters())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
