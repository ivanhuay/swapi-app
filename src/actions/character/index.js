import fetch from 'isomorphic-unfetch';

export const requestCharacter = () => ({ type: 'REQUEST_CHARACTER'});
export const successCharacter = data => ({type:'SUCCESS_CHARACTER', data});

export const getCharacter = (id) => {
  return (dispatch) => {
    dispatch(requestCharacter);
    return fetch(`https://swapi.co/api/people/${id}/`)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        dispatch(successCharacter(data));
      });
  }
}
