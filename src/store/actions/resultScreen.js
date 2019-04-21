import { UPDATE_FILMS_LIST } from "../actionsType";

export function updateFilmsList(filmsList) {
  return {
    type: UPDATE_FILMS_LIST,
    filmsList
  };
}
