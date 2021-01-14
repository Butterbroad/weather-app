import {
  GET_COUNTRY,
} from '../constants/country'

const initialState = {
  country: null
}

export const country = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload
      }
    default:
      return state
  }
}