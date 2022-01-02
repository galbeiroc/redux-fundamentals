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
  return fetchData()
    .then(res => dispatch(requestData(res.data)))
    .catch(err => dispatch(requestError(err)));
}

// Post
export const requestPostData = data => ({
  type: types.REQUEST_POST_DATA,
  payload: {
    ok: data[0].ok,
    loading: false,
  }
});

const postData = data => {
  console.log('data', data);
  return axios.post('http://dev.contanimacion.com/api_tablon/api/mensajes/add', data)
    .then(resp => resp)
    .catch(err => err);
};

export const sendNewData = (data) => dispatch => {
  dispatch(requestSend());
  return postData(data)
    .then(res => {
      console.log(res);
      dispatch(requestPostData(res.data))
    })
    .catch(err => dispatch(requestError(err)))
};
