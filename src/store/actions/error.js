import {
  SHOW_ERROR,
  HIDE_ERROR
} from '../constants/error';

export const showError = () => ({
  type: SHOW_ERROR
});

export const hideError = () => ({
  type: HIDE_ERROR
});