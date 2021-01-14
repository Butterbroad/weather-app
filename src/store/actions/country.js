import { GET_COUNTRY } from '../constants/country';
import axios from 'axios';

const getCountry = (country) => ({
  type: GET_COUNTRY,
  payload: country
});

export const getCountryAsync = (name) => {
  return async dispatch => {
    try {
      // dispatch(showLoader())
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=d9e0ed92bc042252ca932a5d5e95ecd2`);
      dispatch(getCountry(data))
      // dispatch(hideLoader())
    } catch (err) {
      alert(err.message)
      // dispatch(hideLoader())
    }
  }
}