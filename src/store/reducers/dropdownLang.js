import { SET_CURRENT_ITEM } from '../constants/dropdownLang';

const initialState = {
  currentItem: {
    name: 'ENG',
    locale: "en"
  }
}

export const dropdown = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    default:
      return state
  }
}