import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";

import classes from "./Books.module.scss";
import Spinner from "../Spinner/Spinner";
import defaultImg from "./default.webp";

class Books extends Component {
  state = {};
  componentDidMount() {
    if (!this.props.books) {
      this.props.getBooks();
    }
  }
  render() {
    let el = <Spinner />;
    if (this.props.books !== null) {
      el = this.props.books.map(m => {
        return (
          <div key={m.name} className={classes.Book}>
            <img
              src={`http://covers.openlibrary.org/b/isbn/${m.isbn}-M.jpg`}
              alt=""
              onError={() => {
                this.onerror = null;
                this.src = defaultImg;
              }}
            />
            <h3>
              <a
                href={`https://www.google.com/search?q=${m.name} book`}
                target="_blank"
                rel="noopener noreferrer">
                {m.name}
              </a>
            </h3>
          </div>
        );
      });
    }
    return (
      <div className={classes.Container}>
        <h1 className={classes.Heading}>Books</h1>
        <div className={classes.Books}>{el}</div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    books: state.books
  };
};

const MapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(actions.getBooks())
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Books);
