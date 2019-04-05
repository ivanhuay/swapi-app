import {
  SUCCESS_MOVIES,
  ERROR_MOVIES,
  REQUEST_MOVIES,
  SORT_MOVIES,
  GET_MOVIE
} from '../../store/actions';
const initialState = {
  movies:[],
  loading: false,
  error: '',
  sortBy: 'episode_id'
}
function sortBy(array, by){
  const sortedArray = array.sort((a, b)=>{
    if(a[by] > b[by]){
      return 1;
    }
    if(a[by] < b[by]){
      return -1;
    }
    return 0;
  });
  return Array.from(sortedArray);
}
export default function MovieReducer(state = initialState, action){
  switch (action.type) {
    case SUCCESS_MOVIES:
      return Object.assign({},
        state,
        {
          movies:action.response,
          loading: false
        }
      );
    case REQUEST_MOVIES:
      return Object.assign({},
        state,
        {
          loading:true,
          error: ''
        }
      );
    case ERROR_MOVIES:
      return Object.assign({},
      state,
      {
        loading: false,
        error: 'GET_MOVIES_ERROR'
      }
    )
    case SORT_MOVIES:
      return Object.assign({},
      state,
      {
        movies: sortBy(state.movies, action.sortByStr),
        sortBy: action.sortByStr
      }
    )
    default:
      return state;
  }
}
