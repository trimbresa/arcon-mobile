import {takeEvery, put, call} from "redux-saga/effects";
import * as newPostActions from "./actions";
import * as constants from "./constants";

// Services
import PostService from "../../services/PostService";

// Sagas
function* watchNewPost() {
  yield takeEvery(constants.CREATE_NEW_POST, createNewPostAsync);
}

function* createNewPostAsync(action) {
  try {
    yield put(newPostActions.requestNewPost(action));
    const data = yield call(() => {
      return PostService.createPost(action.value)
        .then((res) => {
          return (res.data)
        });
    });
    yield put(newPostActions.requestNewPostSuccess(data));
  } catch (error) {
    console.dir(error);
    yield put(newPostActions.requestNewPostError("Something went wrong!"));
  }
}

export default watchNewPost;