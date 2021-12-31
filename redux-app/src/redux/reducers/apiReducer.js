import * as types from '../actions/actionsTypes';

const initialState = {
  data: [],
  loading: false,
}

const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CALL_API:
      return {
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
      }
    default: return state;
  }
}

export default apiReducer;