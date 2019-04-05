import fetch from 'isomorphic-unfetch';

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const ERROR_MOVIES = 'ERROR_MOVIES';
export const SUCCESS_MOVIES = 'SUCCESS_MOVIES ';
export const SORT_MOVIES = 'SORT_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

const requestMovies = () => ({
  type: REQUEST_MOVIES
});
const successMovies = response => ({
  type: SUCCESS_MOVIES,
  response
});
const errorMovies = () => ({
  type: ERROR_MOVIES,
});
export const sortMovies = (sortByStr) => ({
  type: SORT_MOVIES,
  sortByStr
});
export const getMovie = (movieId) => ({
  type: GET_MOVIE,
  movieId
});
export function getAllMovies() {
  return function(dispatch) {
    dispatch(requestMovies());
    return fetch(`https://swapi.co/api/films/`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(successMovies(response.results));
      })
      .catch(() => {
        dispatch(errorMovies());
      });
  }
}
