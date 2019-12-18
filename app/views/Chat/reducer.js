import * as constants from "./constants";

const initialState = {
  threads: [],
  attachments: {},
  loading: true,
  error: false,
  refreshing: false,
  haveAllThreadsLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_CHAT:
      return {
        ...state,
        ...action.value,
        threads: action.value.refreshing ? [] : state.threads,
        attachments: action.value.refreshing ? {} : state.attachments,
        loading: true,
      };
    case constants.REQUESTED_CHAT:
      return {
        ...state,
        error: false,
      };
    case constants.REQUESTED_CHAT_SUCCEEDED:
      console.log(action.value);
      return {
        ...state,
        threads: [...state.threads, ...action.value.threads],
        attachments: {...state.attachments, ...action.value.attachments},
        loading: false,
        error: false,
        refreshing: false,
        haveAllThreadsLoaded: action.value.haveAllThreadsLoaded,
      };
    case constants.REQUESTED_CHAT_FAILED:
      return {
        ...state,
        threads: [],
        attachments: {},
        loading: false,
        refreshing: false,
        error: true,
      };
    default:
      return state;
  }
};
