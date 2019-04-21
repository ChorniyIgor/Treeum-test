import { UPDATE_FILMS_LIST } from "../actionsType";

const initialState = {
  filmsList: []
};

export default function resultScreen(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILMS_LIST: {
      return {
        ...state,
        filmsList: action.filmsList
      };
    }
    default:
      return state;
  }
}
