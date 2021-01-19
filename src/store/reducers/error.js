import {
  SHOW_ERROR,
  HIDE_ERROR
} from '../constants/error';

const initialState = {
  error: false
}

export const error = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        error: true
      }
    case HIDE_ERROR:
      return {
        error: false
      }
    default:
      return state
  }
}