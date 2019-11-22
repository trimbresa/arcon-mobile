import * as constants from "./constants";

export const requestNewPost = data => {
  return {type: constants.REQUESTED_NEW_POST, value: data};
};

export const requestNewPostSuccess = () => {
  return {
    type: constants.REQUESTED_NEW_POST_SUCCEEDED,
  };
};

export const requestNewPostError = () => {
  return {type: constants.REQUESTED_NEW_POST_FAILED};
};

export const createNewPost = data => {
  return {type: constants.CREATE_NEW_POST, value: data};
};
