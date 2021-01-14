import { combineReducers } from 'redux';
import { country } from '../reducers/country';
import { loader } from '../reducers/loader';
import { dropdown } from '../reducers/dropdownLang';
import { IntlReducer as Intl } from 'react-redux-multilingual';


const allReducers = combineReducers({
  country, loader, dropdown, Intl
});

export default allReducers;
