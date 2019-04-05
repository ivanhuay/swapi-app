import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
    createStore, applyMiddleware,
    combineReducers
} from 'redux';
import {
  MoviesReducer,
  MovieDetailReducer,
  CharacterReducer
} from '../reducers'


export const store = createStore(
  combineReducers({
    movies:MoviesReducer,
    currentMovie: MovieDetailReducer,
    character: CharacterReducer
  }),
  applyMiddleware(thunkMiddleware, logger)
);
