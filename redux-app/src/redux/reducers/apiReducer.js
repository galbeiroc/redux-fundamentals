import * as types from '../actions/actionsTypes';

const initialState = [
  {
    id: 0,
    asunto: "",
    mensaje: "",
    name: "",
    user_id: 0,
    created_at: "2021-01-21 00:00:00"
  }
]

const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CALL_API:
      return {
        ...state,
        data: action.payload.data
      }
    default: return state;
  }
}

export default apiReducer;