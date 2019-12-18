import * as constants from "./constants";

export const requestMessageDetails = () => {
  return {type: constants.REQUESTED_CHAT};
};

export const requestMessageDetailsSuccess = value => {
  return {
    type: constants.REQUESTED_CHAT_SUCCEEDED,
    value,
  };
};

export const requestMessageDetailsError = () => {
  return {type: constants.REQUESTED_CHAT_FAILED};
};

export const fetchMessageDetails = value => {
  return {type: constants.FETCHED_CHAT, value};
};
