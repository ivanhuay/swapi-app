import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
    createStore, applyMiddleware,
    combineReducers
} from 'redux';
import {
  MoviesReducer,
  MovieDetailReducer
} from '../reducers'


export const store = createStore(
  combineReducers({
    movies:MoviesReducer,
    currentMovie: MovieDetailReducer
  }),
  applyMiddleware(thunkMiddleware, logger)
);
