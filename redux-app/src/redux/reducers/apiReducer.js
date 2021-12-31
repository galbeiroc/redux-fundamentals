import * as types from '../actions/actionsTypes';

const initialState = {
  list: [],
  loading: false,
  error: '',
}

const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.REQUEST_SEND: {
      return {
        ...state,
        loading: action.payload.loading,
      }
    }
    case types.REQUEST_DATA: {
      return {
        ...state,
        data: action.payload.list,
        loading: action.payload.loading,
      }
    }
    case types.REQUEST_ERROR: {
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      }
    }
    default: return state;
  }
}

export default apiReducer;