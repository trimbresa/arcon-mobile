import * as constants from "./constants";

const initialState = {
  isSubmitting: false,
  error: false,
  commentsLoading: true,
  comments: [],
  refreshing: false,
  haveAllCommentsLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUESTED_COMMENT_ON_POST:
      return {
        ...state,
        isSubmitting: true,
      };
    case constants.REQUESTED_COMMENT_ON_POST_SUCCEEDED:
      return {
        ...state,
        isSubmitting: false,
        error: false,
        comments: [],
      };
    case constants.REQUESTED_COMMENT_ON_POST_FAILED:
      return {
        ...state,
        isSubmitting: false,
        error: true,
      };

    // comments
    case constants.REQUESTED_POST_COMMENTS:
      return {
        ...state,
        commentsLoading: true,
      };

    case constants.REQUESTED_POST_COMMENTS_FAILED:
      return {
        ...state,
        error: true,
        commentsLoading: false,
      };

    case constants.REQUESTED_POST_COMMENTS_SUCCEEDED:
      return {
        ...state,
        error: false,
        commentsLoading: false,
        comments: action.value.refresh
          ? action.value.data
          : [...state.comments, ...action.value.data],
        haveAllCommentsLoaded: action.value.haveAllCommentsLoaded,
      };

    default:
      return state;
  }
};
