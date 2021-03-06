import { GET_COUNTRY } from '../constants/country';
import {
  showLoader,
  hideLoader
} from '../actions/loader';
import { showError, hideError } from '../actions/error';
import axios from 'axios';

const getCountry = (country) => ({
  type: GET_COUNTRY,
  payload: country
});

const cities = JSON.parse(localStorage.getItem('cities')) || [];

export const getCountryAsync = (payload) => {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload.value}&units=metric&lang=${payload.locale}&appid=d9e0ed92bc042252ca932a5d5e95ecd2`);
      dispatch(getCountry(data));

      if (!cities.length || !cities.find(city => city.toLowerCase() === payload.value.toLowerCase())) {
        cities.push(payload.value.toLowerCase());
        localStorage.setItem('cities', JSON.stringify(cities));
      }

      dispatch(hideLoader())
      dispatch(hideError())
    } catch (err) {
      dispatch(showError())
      dispatch(hideLoader())
    }
  }
}