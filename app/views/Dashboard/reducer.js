import * as constants from "./constants";

const initialState = {
  locations: [],
  posts: [],
  schedules: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_DASHBOARD:
      return {
        ...state,
        locations: [],
        posts: [],
        schedules: [],
      };
    case constants.REQUESTED_DASHBOARD:
      return {
        ...state,
        locations: [],
        posts: [],
        schedules: [],
        loading: true,
        error: false,
      };
    case constants.REQUESTED_DASHBOARD_SUCCEEDED:
      return {
        ...state,
        locations: action.value.locations,
        posts: action.value.posts,
        schedules: action.value.schedules,
        loading: false,
        error: false
      };
    case constants.REQUESTED_DASHBOARD_FAILED:
      return {
        ...state,
        locations: [],
        posts: [],
        schedules: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
