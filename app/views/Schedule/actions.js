import * as constants from "./constants";
import moment from "moment";

export const requestSchedule = () => {
  return {type: constants.REQUESTED_SCHEDULE};
};

export const requestScheduleSuccess = ({data, startDate, endDate}) => {
  let {events = {}, resource = {}, mapJobs, mapLocations} = data;

  const date = startDate;
  const mappedEvents = {};
  for (let i = 0; i < startDate.diff(endDate, "days"); i++) {
    mappedEvents[date.format("YYYY-MM-DD")] = [];
    date.add(1, "day");
  }

  events.forEach(event => {
    mappedEvents[moment(event.startDate).format("YYYY-MM-DD")] = [event];
  });

  return {
    type: constants.REQUESTED_SCHEDULE_SUCCEEDED,
    value: {
      events: mappedEvents,
      resource,
      mapJobs,
      mapLocations,
    },
  };
};

export const requestScheduleError = () => {
  return {type: constants.REQUESTED_SCHEDULE_FAILED};
};

export const fetchSchedule = activeMonth => {
  return {
    type: constants.FETCHED_SCHEDULE,
    value: {
      activeMonth,
    },
  };
};
