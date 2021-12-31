import * as types from './actionsTypes';

export const callApi = ({ data, loading }) => ({
  type: types.CALL_API,
  payload: {
    data,
    loading,
  }
});
