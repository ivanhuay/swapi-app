const initialState = {
  loading: true,
  data: {}
}

export default function CharacterReducer(state = initialState, action){
  switch (action.type) {
    case 'REQUEST_CHARACTER':
      return {...initialState}
    case 'SUCCESS_CHARACTER':
      return {...state, loading: false, data: action.data};
    default:
        return state;
  }
}
