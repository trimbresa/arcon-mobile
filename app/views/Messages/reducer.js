import * as constants from "./constants";

const initialState = {
  messages: [],
  loading: true,
  error: false,
  refreshing: false,
  haveAllMessagesLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_MESSAGES:
      return {
        ...state,
        ...action.value,
        messages: action.value.refreshing ? [] : state.messages,
        loading: true,
      };
    case constants.REQUESTED_MESSAGES:
      return {
        ...state,
        error: false,
      };
    case constants.REQUESTED_MESSAGES_SUCCEEDED:
      return {
        ...state,
        messages: action.value.refreshing
          ? action.value.messages
          : [...state.messages, ...action.value.messages],
        loading: false,
        error: false,
        refreshing: false,
        haveAllMessagesLoaded: action.value.haveAllMessagesLoaded,
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
