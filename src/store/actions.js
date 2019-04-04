import fetch from 'isomorphic-unfetch';

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const ERROR_MOVIES = 'ERROR_MOVIES';
export const SUCCESS_MOVIES = 'SUCCESS_MOVIES ';
export const SORT_MOVIES = 'SORT_MOVIES';

function requestMovies() {
  return {
    type: REQUEST_MOVIES
  }
}
function successMovies(response) {
  return {
    type: SUCCESS_MOVIES,
    response
  }
}

function errorMovies(){
  return {
    type: ERROR_MOVIES,
  }
}

export function sortMovies(sortByStr){
  return {
    type: SORT_MOVIES,
    sortByStr
  }
}

export function getAllMovies(){
  return function(dispatch){
    dispatch(requestMovies());
    return fetch(`https://swapi.co/api/films/`)
      .then((response)=>{
        return response.json();
      })
      .then((response)=>{
        return dispatch(successMovies(response.results));
      })
      .catch(()=>{
        dispatch(errorMovies());
      });
  }
}
