import {
    HTTP_CALL_BEGIN,
    HTTP_CALL_END,
    SIGNIN_USER_SUCCESS,
    SIGNUP_USER_SUCCESS,
  } from "./constants";
  
  const initialState = {
    loading: false,
    user: {},
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
    case HTTP_CALL_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case HTTP_CALL_END:
      return {
        ...state,
        loading: false,
      };
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
    }
  }
  