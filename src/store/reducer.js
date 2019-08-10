import * as actionTypes from "./actionTypes";

const initialState = {
  books: null,
  characters: [],
  houses: []
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
    case actionTypes.SET_GREAT_HOUSES:
      return {
        ...state,
        houses: [...state.houses, action.great]
      };
    default:
      return state;
  }
};

export default reducer;
