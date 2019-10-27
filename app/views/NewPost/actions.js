import * as constants from "./constants";
import { fetchDashboard } from "../Dashboard/actions";

export const requestNewPost = (data) => {
  return { type: constants.REQUESTED_NEW_POST, value: data }
};

export const requestNewPostSuccess = (data) => {
  return {
    type: constants.REQUESTED_NEW_POST_SUCCEEDED,
    value: {
      successMsg: data.message
    }
  }
};

export const requestNewPostError = (error) => {
  return { type: constants.REQUESTED_NEW_POST_FAILED, value: error }
};

export const createNewPost = (data) => {
  return { type: constants.CREATE_NEW_POST, value: data }
};