import * as constants from "./constants";
import moment from "moment";

const initialState = {
  schedules: [],
  loading: false,
  error: false,
  refreshing: false,
  haveAllSchedulesLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_DAY_SCHEDULES:
      return {
        schedules: action.value.page === 1 ? [] : state.schedules,
        loading: true,
        ...state,
      };

    case constants.REQUESTED_DAY_SCHEDULES_SUCCEEDED:
      return {
        ...state,
        schedules: action.value.refreshing
          ? action.value.schedules
          : [...state.schedules, ...action.value.schedules],
        loading: false,
        error: false,
        refreshing: false,
        haveAllSchedulesLoaded: action.value.haveAllSchedulesLoaded,
      };

    case constants.REQUESTED_DAY_SCHEDULES_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
        refreshing: false,
      };

    case constants.REQUESTED_DAY_SCHEDULES:
      return {
        ...state,
        error: false,
        loading: true,
        refreshing: action.value ? action.value.refresh : false,
      };

    default:
      return state;
  }
};
