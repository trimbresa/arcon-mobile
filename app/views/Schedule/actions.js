import * as constants from "./constants";
import moment from "moment";
import {SCHEDULE_TABS} from "../../global/constants";

// deps
export const requestDepartments = () => {
  return {type: constants.REQUESTED_DEPARTMENTS};
};

export const requestDepartmentsSuccess = data => {
  return {type: constants.REQUESTED_DEPARTMENTS_SUCCEEDED, value: data};
};

export const requestDepartmentsError = () => {
  return {type: constants.REQUESTED_DEPARTMENTS_FAILED};
};

export const fetchDepartments = () => {
  return {type: constants.FETCHED_DEPARTMENTS};
};

// jobs
export const requestJobs = () => {
  return {type: constants.REQUESTED_JOBS};
};

export const requestJobsSuccess = data => {
  return {type: constants.REQUESTED_JOBS_SUCCEEDED, value: data};
};

export const requestJobsError = () => {
  return {type: constants.REQUESTED_JOBS_FAILED};
};

export const fetchJobs = () => {
  return {type: constants.FETCHED_JOBS};
};

// schedules
export const requestSchedule = () => {
  return {type: constants.REQUESTED_SCHEDULE};
};

export const requestScheduleSuccess = ({
  startDate,
  endDate,
  data,
  type,
  refreshing,
}) => {
  const date = moment(startDate);

  const mappedEvents = {};
  for (let i = 0; i < endDate.diff(startDate, "days"); i++) {
    mappedEvents[date.format("YYYY-MM-DD")] = [];
    date.add(1, "day");
  }

  if (type === SCHEDULE_TABS.MY_SCHEDULE) {
    data.events.forEach(event => {
      mappedEvents[moment(event.startDate).format("YYYY-MM-DD")].push(event);
    });
  } else if (
    [
      SCHEDULE_TABS.EMPLOYEE_SCHEDULE,
      SCHEDULE_TABS.DEPARTMENT_SCHEDULE,
    ].includes(type)
  ) {
    Object.keys(data).forEach(k => {
      mappedEvents[k] = data[k].events.map(e => ({
        ...e,
        extra: data[k].total - data[k].events.length,
      }));
    });
  }

  const {resource = {}, mapJobs = {}, mapLocations = {}} = data;

  return {
    type: constants.REQUESTED_SCHEDULE_SUCCEEDED,
    value: {
      schedules: mappedEvents,
      resource,
      mapJobs,
      mapLocations,
      refreshing,
    },
  };
};

export const requestScheduleError = () => {
  return {type: constants.REQUESTED_SCHEDULE_FAILED};
};

export const fetchSchedules = ({date, type, filters, refreshing}) => {
  return {
    type: constants.FETCHED_SCHEDULE,
    value: {
      date,
      type,
      refreshing,
      filters: Object.keys(filters).reduce((a, b) => {
        a[b] = JSON.stringify(filters[b].map(f => f.value));
        return a;
      }, {}),
    },
  };
};
