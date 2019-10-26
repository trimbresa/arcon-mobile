import * as constants from "./constants";
import moment from "moment";

const initialState = {
  events: [],
  activeMonth: moment(),
  resource: null,
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHED_SCHEDULE:
      return {
        ...state,
        // events: [],
        activeMonth: action.value.activeMonth,
        resource: null,
      };
    case constants.REQUESTED_SCHEDULE:
      return {
        ...state,
        // events: [],
        resource: null,
        loading: true,
        error: false,
      };
    case constants.REQUESTED_SCHEDULE_SUCCEEDED:
      return {
        ...state,
        events: action.value.events,
        resource: action.value.resource,
        loading: false,
        error: false
      };
    case constants.REQUESTED_SCHEDULE_FAILED:
      return {
        ...state,
        // events: [],
        resource: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
