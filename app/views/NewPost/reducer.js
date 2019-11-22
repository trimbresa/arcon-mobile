import * as constants from "./constants";

const initialState = {
  isSubmitting: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CREATE_NEW_POST:
      return {
        ...state,
        isSubmitting: false,
        error: null,
      };
    case constants.REQUESTED_NEW_POST:
      return {
        ...state,
        isSubmitting: true,
        error: null,
      };
    case constants.REQUESTED_NEW_POST_SUCCEEDED:
      return {
        ...state,
        isSubmitting: false,
        error: null,
      };
    case constants.REQUESTED_NEW_POST_FAILED:
      return {
        ...state,
        isSubmitting: false,
        error: true,
      };
    default:
      return state;
  }
};
