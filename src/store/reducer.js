import * as actionTypes from "./actionTypes";

const initialState = {
  books: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.books
      };
    default:
      return state;
  }
};

export default reducer;
