import * as constants from "./constants";

// posting comments
export const postComment = data => {
  return {type: constants.COMMENT_ON_POST, value: data};
};

export const requestedPostComment = () => {
  return {type: constants.REQUESTED_COMMENT_ON_POST};
};

export const postCommentSuccess = () => {
  return {
    type: constants.REQUESTED_COMMENT_ON_POST_SUCCEEDED,
  };
};

export const postCommentError = () => {
  return {type: constants.REQUESTED_COMMENT_ON_POST_FAILED};
};

// fetching comments
export const fetchPostComments = (postId, pageNr, refresh) => {
  return {
    type: constants.FETCH_POST_COMMENTS,
    value: {postId, pageNr, refresh},
  };
};

export const requestedPostComments = () => {
  return {type: constants.REQUESTED_POST_COMMENTS};
};

export const requestedPostCommentsSucceeded = data => {
  return {type: constants.REQUESTED_POST_COMMENTS_SUCCEEDED, value: data};
};

export const requestedPostCommentsError = () => {
  return {type: constants.REQUESTED_POST_COMMENTS_FAILED};
};
