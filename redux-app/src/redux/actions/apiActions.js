import * as types from './actionsTypes';

export const callApi = data => ({
  type: types.CALL_API,
  payload: {
    data,
  }
});
