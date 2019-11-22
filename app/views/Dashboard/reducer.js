import * as constants from "./constants";

const initialState = {
  posts: [],
  loading: false,
  error: false,
  refreshing: false,
  locations: [],
  haveAllPostsLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_DASHBOARD:
      return {
        ...state,
        refreshing: action.value.refresh,
      };
    case constants.REQUESTED_DASHBOARD:
      return {
        ...state,
        loading: true,
        error: false,
        refreshing: action.value ? action.value.refresh : false,
      };
    case constants.REQUESTED_DASHBOARD_SUCCEEDED:
      return {
        ...state,
        posts: action.value.refresh
          ? action.value.data
          : [...state.posts, ...action.value.data],
        loading: false,
        error: false,
        refreshing: false,
        haveAllPostsLoaded: action.value.haveAllPostsLoaded,
      };
    case constants.REQUESTED_DASHBOARD_FAILED:
      return {
        ...state,
        posts: [],
        loading: false,
        error: true,
        refreshing: false,
      };
    case constants.REQUESTED_LOCATIONS_SUCCEEDED:
      return {
        ...state,
        locations: action.value,
      };
    default:
      return state;
  }
};
