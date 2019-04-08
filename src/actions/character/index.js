import fetch from 'isomorphic-unfetch';

export const requestCharacter = () => ({ type: 'REQUEST_CHARACTER'});
export const successCharacter = data => ({type:'SUCCESS_CHARACTER', data});
export const requestDetails = () => ({ type: 'REQUEST_DETAILS'});
export const successDetails = details => ({type:'SUCCESS_DETAILS', details});
export const requestSpecies = () => ({ type: 'REQUEST_SPECIES'});
export const successSpecies = species => ({type:'SUCCESS_SPECIES', species});

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

export const getDetails = (urls) => {
  return (dispatch) => {
    dispatch(requestDetails());
    const detailPromises = urls.map((url) => {
      return fetch(url).then((response) => {
        return response.json();
      })
    });
    return Promise.all(detailPromises)
      .then((response)=>{
        dispatch(successDetails(response));
      });
  }
}
export const getSpecies = (speciesUrls) => {
  return (dispatch) => {
    dispatch(requestSpecies());
    const speciesPromises = speciesUrls.map((url)=>{
      return fetch(url).then((response) => {
        return response.json();
      })
    });
    return Promise.all(speciesPromises)
      .then((response)=>{
        dispatch(successSpecies(response))
      });
  }
}
