import * as constants from "./constants";
import moment from "moment";

export const requestSchedule = () => {
  return { type: constants.REQUESTED_SCHEDULE }
};

export const requestScheduleSuccess = (data) => {
  let { events = [], resource = null } = data;
  
  const updatedEvents = events.reduce((newObj, event) => {
    const {startDate = moment(), endDate = moment()} = event;

    let duration = moment.duration(moment(endDate).diff(startDate));
    let hours = duration.asHours();

    newObj[moment(event.startDate).format("YYYY-MM-DD")] = [{
      title: event.name,
      startDate: moment(event.startDate).format("hh A"),
      endDate: moment(event.endDate).format("hh A"),
      duration: hours,
      sttus: event.status
    }];
    
    return newObj;
  }, {});
  
  return {
    type: constants.REQUESTED_SCHEDULE_SUCCEEDED,
    value: {
      events: updatedEvents,
      resource
    }
  }
};

export const requestScheduleError = () => {
  return { type: constants.REQUESTED_SCHEDULE_FAILED }
};

export const fetchSchedule = (timestamp) => {
  const activeMonth = moment(timestamp).format(`YYYY-MM-DDTHH:mm:ssZ`);
  
  return {
    type: constants.FETCHED_SCHEDULE,
    value: {
      activeMonth
    }
  }
};