const initialState = {
  loading: true,
  data: {}
};

export default function MovieDetailReducer(state = initialState, action){
  switch (action.type) {
    case 'REQUEST_MOVIE':
      return {...initialState}
    case 'SUCCESS_MOVIE':
      return {...state, loading: false, data: action.data};
    default:
        return state;
  }
}
