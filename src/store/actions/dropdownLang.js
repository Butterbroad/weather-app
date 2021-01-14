import { SET_CURRENT_ITEM } from '../constants/dropdownLang';

export const setCurrentItem = (item) => ({
  type: SET_CURRENT_ITEM,
  payload: item
})