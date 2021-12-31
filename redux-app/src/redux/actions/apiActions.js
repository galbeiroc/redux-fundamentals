import axios from 'axios';

import * as types from './actionsTypes';

export const callApi = ({ data, loading }) => ({
  type: types.CALL_API,
  payload: {
    data,
    loading,
  }
});

export const requestSend = () => ({
  type: types.REQUEST_SEND,
  payload: {
    loading: true,
  }
});

export const requestData = data => ({
  type: types.REQUEST_DATA,
  payload: {
    data,
    loading: true,
  }
});

export const requestError = error => ({
  type: types.REQUEST_ERROR,
  payload: {
    error,
    loading: false
  }
});

const fetchData = () => {
  return axios.get('http://dev.contanimacion.com/api_tablon/api/mensajes')
    .then(resp => resp)
    .catch(err => err);
}

export const getData = () => dispatch => {
  dispatch(requestSend);
  fetchData()
    .then(data => requestData(data))
    .catch(err => fetchData(err));
}