import {takeEvery, put, call, select} from "redux-saga/effects";
import * as postDetailsActions from "./actions";
import * as constants from "./constants";
import StorageManager from "../../helpers/StorageManager";
import Message from "../../helpers/FlashMessageHelper";

// Services
import PostService from "../../services/PostService";

// Sagas
function* watchPost() {
  yield takeEvery(constants.COMMENT_ON_POST, postCommentAsync);
  yield takeEvery(constants.FETCH_POST_COMMENTS, fetchPostCommentsAsync);
}

function* postCommentAsync({value}) {
  try {
    yield put(postDetailsActions.requestedPostComment());

    yield call(async () => {
      const comment = await PostService.commentOnPost(value);

      if (comment) Message.successMessage(JSON.parse(comment).message);
    });
    yield put(postDetailsActions.postCommentSuccess());
  } catch (error) {
    yield put(postDetailsActions.postCommentError());
  }
}

function* fetchPostCommentsAsync({value: {postId, pageNr, refresh}}) {
  try {
    yield put(postDetailsActions.requestedPostComments());
    const data = yield call(async () => {
      return PostService.fetchComments({postId, pageNr}).then(res => {
        return res.data;
      });
    });
    yield put(
      postDetailsActions.requestedPostCommentsSucceeded({
        data,
        refresh,
        haveAllCommentsLoaded: data.length < 10,
      }),
    );
  } catch (error) {
    console.log(error);
    yield put(postDetailsActions.requestedPostCommentsError());
  }
}

export default watchPost;
