import * as constants from "./constants";
import moment from "moment";

const initialState = {
  schedules: {},
  resource: null,
  loading: false,
  error: false,
  loadingDeps: false,
  loadingJobs: false,
  departments: [],
  jobs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUESTED_DEPARTMENTS_SUCCEEDED:
      return {
        ...state,
        departments: action.value.data,
        loadingDeps: false,
      };
    case constants.REQUESTED_DEPARTMENTS_FAILED:
      return {
        ...state,
        error: true,
        loadingDeps: false,
      };
    case constants.REQUESTED_DEPARTMENTS:
      return {
        ...state,
        loadingDeps: true,
      };
    case constants.REQUESTED_JOBS_SUCCEEDED:
      return {
        ...state,
        jobs: action.value.data,
        loadingJobs: false,
      };
    case constants.REQUESTED_JOBS_FAILED:
      return {
        ...state,
        error: true,
        loadingJobs: false,
      };
    case constants.REQUESTED_JOBS:
      return {
        ...state,
        loadingJobs: true,
      };
    case constants.FETCHED_SCHEDULE:
      return {
        ...state,
        schedules: action.value.refreshing ? {} : state.schedules,
        resource: null,
      };
    case constants.REQUESTED_SCHEDULE:
      return {
        ...state,
        resource: null,
        loading: true,
        error: false,
      };
    case constants.REQUESTED_SCHEDULE_SUCCEEDED:
      const {
        schedules,
        resource,
        mapJobs,
        mapLocations,
        refreshing,
      } = action.value;
      return {
        ...state,
        schedules: refreshing ? schedules : {...state.schedules, ...schedules},
        resource,
        mapJobs,
        mapLocations,
        loading: false,
        error: false,
      };
    case constants.REQUESTED_SCHEDULE_FAILED:
      return {
        ...state,
        resource: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
