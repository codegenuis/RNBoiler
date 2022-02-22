import { HTTP_CALL_BEGIN, HTTP_CALL_END } from "./constants";

export function httpCallBegin() {
  return {
    type: HTTP_CALL_BEGIN,
  };
}

export function httpCallEnd() {
  return {
    type: HTTP_CALL_END,
  };
}


