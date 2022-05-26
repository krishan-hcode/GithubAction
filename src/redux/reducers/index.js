import { combineReducers } from 'redux';
import product from './productReducer';
import app from './appReducer';

export default combineReducers({
  product,
  app
});
