import * as actionTypes from "./actionTypes";

const initialState = {
  books: null,
  characters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.books
      };
    case actionTypes.SET_MAIN_CHARACTERS:
      return {
        ...state,
        characters: [...state.characters, action.main]
      };
    default:
      return state;
  }
};

export default reducer;
