import * as constants from "./constants";

const initialState = {
  isSubmitting: false,
  myId: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_POST_REPLY:
      return {
        ...state,
        isSubmitting: false,
        myId: null,
      };
    case constants.REQUESTED_POST_REPLY:
      return {
        ...state,
        isSubmitting: true,
        error: false,
        myId: null,
      };
    case constants.REQUESTED_POST_REPLY_SUCCEEDED:
      return {
        ...state,
        isSubmitting: false,
        error: false,
        myId: action.value.myId,
      };
    case constants.REQUESTED_POST_REPLY_FAILED:
      return {
        ...state,
        isSubmitting: false,
        error: true,
        myId: null,
      };
    default:
      return state;
  }
};
