import * as actionTypes from "./actionTypes";
import axios from "../axios";

export const setBooks = data => {
  return {
    type: actionTypes.SET_BOOKS,
    books: data
  };
};

export const getBooks = () => async dispatch => {
  await axios
    .get("books")
    .then(response => {
      console.log("action", response.data);
      dispatch(setBooks(response.data));
    })
    .catch(err => console.log(err));
};
