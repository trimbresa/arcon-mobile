import * as constants from "./constants";

const initialState = {
  isSubmitting: false,
  successMsg: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CREATE_NEW_POST:
      return {
        ...state,
        isSubmitting: false,
        successMsg: null,
        error: null,
      };
    case constants.REQUESTED_NEW_POST:
      return {
        ...state,
        isSubmitting: true,
        successMsg: null,
        error: null
      };
    case constants.REQUESTED_NEW_POST_SUCCEEDED:
      return {
        ...state,
        isSubmitting: false,
        successMsg: action.value.successMsg,
        error: null
      };
    case constants.REQUESTED_NEW_POST_FAILED:
      return {
        ...state,
        isSubmitting: false,
        successMsg: null,
        error: action.value.error
      };
    default:
      return state;
  }
};
