import { SIGNIN_USER_SUCCESS, SIGNUP_USER_SUCCESS } from "./constants";

export function signInUser() {
  return {
    type: SIGNIN_USER_SUCCESS,
  };
}

export function signUpUser() {
  return {
    type: SIGNUP_USER_SUCCESS,
  };
}


