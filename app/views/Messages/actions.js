import * as constants from "./constants";

export const requestMessages = () => {
  return { type: constants.REQUESTED_MESSAGES }
};

export const requestMessagesSuccess = (data) => {
  return {
    type: constants.REQUESTED_MESSAGES_SUCCEEDED,
    value: {
      messages: data
    }
  }
};

export const requestMessagesError = () => {
  return { type: constants.REQUESTED_MESSAGES_FAILED }
};

export const fetchMessages = () => {
  return { type: constants.FETCHED_MESSAGES }
};