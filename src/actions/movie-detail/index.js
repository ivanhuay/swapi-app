import fetch from 'isomorphic-unfetch';

export const requestMovie = () => ({ type: 'REQUEST_MOVIE'});
export const successMovie = data => ({type:'SUCCESS_MOVIE', data});

export const getMovie = (episodeId) => {
  return (dispatch) => {
    dispatch(requestMovie);
    return fetch(`https://swapi.co/api/films/${episodeId}`)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        dispatch(successMovie(data));
      });
  }
}
