import * as constants from "./constants";

const initialState = {
  messages: [],
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    case constants.REQUESTED_MESSAGES:
      return {
        ...state,
        messages: [],
        loading: true,
        error: false,
      };
    case constants.REQUESTED_MESSAGES_SUCCEEDED:
      return {
        ...state,
        messages: action.value.messages,
        loading: false,
        error: false
      };
    case constants.REQUESTED_MESSAGES_FAILED:
      return {
        ...state,
        messages: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
