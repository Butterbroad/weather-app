import {
  GET_COUNTRY,
} from '../constants/countries'

const initialState = {
  countries: null
}

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        countries: action.payload
      }
    default:
      return state
  }
}