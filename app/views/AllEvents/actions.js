import * as constants from "./constants";
import moment from "moment";

// deps
export const requestDaySchedules = () => {
  return {type: constants.REQUESTED_DAY_SCHEDULES};
};

export const requestDaySchedulesSuccess = ({
  data,
  refreshing,
  haveAllSchedulesLoaded,
}) => {
  return {
    type: constants.REQUESTED_DAY_SCHEDULES_SUCCEEDED,
    value: {
      schedules: data,
      haveAllSchedulesLoaded,
      refreshing,
    },
  };
};

export const requestDaySchedulesError = () => {
  return {type: constants.REQUESTED_DAY_SCHEDULES_FAILED};
};

export const fetchDaySchedules = ({date, refreshing, page, type}) => {
  return {
    type: constants.REQUEST_DAY_SCHEDULES,
    value: {
      startDate: date.format("YYYY-MM-DD"),
      endDate: date.format("YYYY-MM-DD"),
      refreshing,
      page,
      type,
    },
  };
};
