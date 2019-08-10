import * as actionTypes from "./actionTypes";
import axios from "../axios";

import characters from "./charaters";
import houses from "./houses";

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
      dispatch(setBooks(response.data));
    })
    .catch(err => console.log(err));
};

export const setMainCharacters = data => {
  return {
    type: actionTypes.SET_MAIN_CHARACTERS,
    main: data[0]
  };
};

export const getMainCharacters = () => async dispatch => {
  characters.forEach(c => {
    axios
      .get(`characters?name=${c}`)
      .then(response => response.data)
      .then(d => {
        if (d.length === 1) {
          dispatch(setMainCharacters(d));
        } else if (d.length > 1) {
          dispatch(
            setMainCharacters(
              d.filter(f => {
                return f["playedBy"][0] !== "";
              })
            )
          );
        }
      });
  });
};

export const setGreatHouses = data => {
  return {
    type: actionTypes.SET_GREAT_HOUSES,
    great: data[0]
  };
};

export const getGreatHouses = () => async dispatch => {
  houses.forEach(h => {
    axios
      .get(`houses?name=${h}`)
      .then(response => response.data)
      .then(d => {
        dispatch(setGreatHouses(d));
      });
  });
};
