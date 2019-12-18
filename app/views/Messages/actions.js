import * as constants from "./constants";

export const requestMessages = () => {
  return {type: constants.REQUESTED_MESSAGES};
};

export const requestMessagesSuccess = value => {
  return {
    type: constants.REQUESTED_MESSAGES_SUCCEEDED,
    value,
  };
};

export const requestMessagesError = () => {
  return {type: constants.REQUESTED_MESSAGES_FAILED};
};

export const fetchMessages = value => {
  return {type: constants.FETCHED_MESSAGES, value};
};
