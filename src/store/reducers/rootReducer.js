import { combineReducers } from 'redux';
import { country } from '../reducers/country'


const allReducers = combineReducers({
  country
});

export default allReducers;
