import {takeEvery, put, call} from "redux-saga/effects";
import * as newPostActions from "./actions";
import {fetchPosts} from "../Dashboard/actions";
import * as constants from "./constants";

// Services
import PostService from "../../services/PostService";
import FlashMessageHelper from "../../helpers/FlashMessageHelper";

// Sagas
function* watchNewPost() {
  yield takeEvery(constants.CREATE_NEW_POST, createNewPostAsync);
}

function* createNewPostAsync(action) {
  try {
    yield put(newPostActions.requestNewPost(action));

    yield call(async () => {
      const res = await PostService.createPost(action.value);
      FlashMessageHelper.successMessage(JSON.parse(res).message);
    });

    yield put(newPostActions.requestNewPostSuccess());
    yield put(fetchPosts(0, true));
  } catch (error) {
    console.dir(error);
    FlashMessageHelper.dangerMessage("Something went wrong with the post");
    yield put(newPostActions.requestNewPostError());
  }
}

export default watchNewPost;
