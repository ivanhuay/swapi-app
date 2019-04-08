const initialState = {
  loading: true,
  data: {},
  details: [],
  loadingDetails: true,
}

export default function CharacterReducer(state = initialState, action){
  switch (action.type) {
    case 'REQUEST_CHARACTER':
      return {...initialState}
    case 'SUCCESS_CHARACTER':
      return {...state, loading: false, data: action.data};
    case 'REQUEST_DETAILS':
      return {...state, loadingDetails: true};
    case 'SUCCESS_DETAILS':
      return {...state, loadingDetails: false, details: action.details}
    default:
        return state;
  }
}
