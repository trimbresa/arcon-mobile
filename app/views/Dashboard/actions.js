import * as constants from "./constants";

export const requestDashboard = () => {
  return {type: constants.REQUESTED_DASHBOARD};
};

export const requestDashboardSuccess = data => {
  return {
    type: constants.REQUESTED_DASHBOARD_SUCCEEDED,
    value: data,
  };
};

export const requestDashboardError = () => {
  return {type: constants.REQUESTED_DASHBOARD_FAILED};
};

export const fetchPosts = (pageNr, refresh) => {
  return {type: constants.FETCHED_DASHBOARD, value: {pageNr, refresh}};
};

export const fetchLocations = () => {
  return {type: constants.FETCHED_LOCATIONS};
};

export const requestLocationsSuccess = data => {
  return {type: constants.REQUESTED_LOCATIONS_SUCCEEDED, value: data};
};
