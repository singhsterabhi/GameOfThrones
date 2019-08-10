import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";

import classes from "./Houses.module.scss";
import Spinner from "../Spinner/Spinner";

class Houses extends Component {
  state = {};
  componentDidMount() {
    if (!this.props.houses.length) {
      console.log(this.props.houses);
      this.props.getGreatHouses();
    }
  }
  render() {
    let el = null;
    if (this.props.houses.length) {
      el = this.props.houses.map(c => (
        <div key={c.name} className={classes.House}>
          <h3>{c.name}</h3>
          <div>
            {c.founded !== "" ? (
              <p>
                <span className={classes.Head}>Founded :</span> {c.founded}
              </p>
            ) : null}
            {c.region !== "" ? (
              <p>
                <span className={classes.Head}>Region :</span> {c.region}
              </p>
            ) : null}
            {c.coatOfArms !== "" ? (
              <p>
                <span className={classes.Head}>Coat Of Arms :</span>{" "}
                {c.coatOfArms}
              </p>
            ) : null}
            {c.words !== "" ? (
              <p>
                <span className={classes.Head}>Words :</span> {c.words}
              </p>
            ) : null}
            {c.titles && c.titles[0] !== "" ? (
              <p>
                <span className={classes.Head}>Titles :</span>{" "}
                {c.titles.join(", ")}
              </p>
            ) : null}
            {c.seats && c.seats[0] !== "" ? (
              <p>
                <span className={classes.Head}>Seats :</span>{" "}
                {c.seats.join(", ")}
              </p>
            ) : null}

            {c.ancestralWeapons && c.ancestralWeapons[0] !== "" ? (
              <p>
                <span className={classes.Head}>Ancestral Weapons :</span>{" "}
                {c.ancestralWeapons.join(", ")}
              </p>
            ) : null}
            <a
              className={classes.ReadMore}
              href={`https://www.google.com/search?q=${c.name}`}
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
        <h1 className={classes.Heading}>Houses</h1>
        {el === null ? <Spinner /> : null}
        <div className={classes.Houses}>{el}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    houses: state.houses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGreatHouses: () => dispatch(actions.getGreatHouses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Houses);
