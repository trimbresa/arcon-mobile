import * as constants from "./constants";

export const requestPostReply = () => {
  return { type: constants.REQUESTED_POST_REPLY }
};

export const requestPostReplySuccess = (data) => {
  return {
    type: constants.REQUESTED_POST_REPLY_SUCCEEDED,
    value: {
      threads: data.threads,
      myId: data.myId
    }
  }
};

export const requestPostReplyError = () => {
  return { type: constants.REQUESTED_POST_REPLY_FAILED }
};

export const fetchPostReply = (data) => {
  return { type: constants.FETCHED_POST_REPLY, value: data  }
};