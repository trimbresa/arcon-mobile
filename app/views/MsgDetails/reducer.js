import * as constants from "./constants";

const initialState = {
  threads: [],
  myId: null,
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_MESSAGE_DETAILS:
      return {
        ...state,
        threads: [],
        myId: null,
      };
    case constants.REQUESTED_MESSAGE_DETAILS:
      return {
        ...state,
        threads: [],
        loading: true,
        error: false,
        myId: null,
      };
    case constants.REQUESTED_MESSAGE_DETAILS_SUCCEEDED:
      return {
        ...state,
        threads: action.value.threads,
        loading: false,
        error: false,
        myId: action.value.myId,
      };
    case constants.REQUESTED_MESSAGE_DETAILS_FAILED:
      return {
        ...state,
        threads: [],
        loading: false,
        error: true,
        myId: null,
      };
    default:
      return state;
  }
};
