import * as types from './actionsTypes';

export const navClick = data => ({
  type: types.NAV_CLICK,
  payload: {
    title: data.title,
  }
});
