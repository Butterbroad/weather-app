import { GET_COUNTRY } from '../constants/country';
import {
  showLoader,
  hideLoader
} from '../actions/loader';
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

      if (!cities.length || !cities.find(city => city === payload.value)) {
        cities.push(payload.value);
        localStorage.setItem('cities', JSON.stringify(cities));
      }

      dispatch(hideLoader())
    } catch (err) {
      alert(err.message)
      dispatch(showLoader())
    }
  }
}
