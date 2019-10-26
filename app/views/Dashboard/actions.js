import * as constants from "./constants";

export const requestDashboard = () => {
  return { type: constants.REQUESTED_DASHBOARD }
};

export const requestDashboardSuccess = (data) => {
  return {
    type: constants.REQUESTED_DASHBOARD_SUCCEEDED,
    value: data
  }
};

export const requestDashboardError = () => {
  return { type: constants.REQUESTED_DASHBOARD_FAILED }
};

export const fetchDashboard = () => {
  return { type: constants.FETCHED_DASHBOARD }
};