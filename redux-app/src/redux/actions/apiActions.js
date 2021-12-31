import axios from 'axios';

import * as types from './actionsTypes';

export const requestSend = () => ({
  type: types.REQUEST_SEND,
  payload: {
    loading: true,
  }
});

export const requestData = data => ({
  type: types.REQUEST_DATA,
  payload: {
    list: data,
    loading: false,
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
  dispatch(requestSend());
  fetchData()
    .then(data => dispatch(requestData(data.data)))
    .catch(err => dispatch(requestError(err)));
}
