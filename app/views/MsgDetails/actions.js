import * as constants from "./constants";

export const requestMessageDetails = () => {
  return { type: constants.REQUESTED_MESSAGE_DETAILS }
};

export const requestMessageDetailsSuccess = (data) => {
  return {
    type: constants.REQUESTED_MESSAGE_DETAILS_SUCCEEDED,
    value: {
      threads: data.threads,
      myId: data.myId
    }
  }
};

export const requestMessageDetailsError = () => {
  return { type: constants.REQUESTED_MESSAGE_DETAILS_FAILED }
};

export const fetchMessageDetails = (data) => {
  return { type: constants.FETCHED_MESSAGE_DETAILS, value: data  }
};