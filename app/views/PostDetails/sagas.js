import {takeEvery, put, call, select} from "redux-saga/effects";
import * as postDetailsActions from "./actions";
import * as constants from "./constants";
import { requestDashboardSuccess } from "../Dashboard/actions";
import StorageManager from "../../helpers/StorageManager";

// Services
import PostService from "../../services/PostService";

// Sagas
function* watchPostReply() {
  yield takeEvery(constants.FETCHED_POST_REPLY, fetchPostReplyAsync);
}

function* fetchPostReplyAsync(action) {
  try {
    let state = yield select();
    
    yield put(postDetailsActions.requestPostReply());

    const data = yield call(async () => {
      return PostService.replyToComment(action.value)
        .then(async () => {
          const me = await StorageManager.get("user");
          
          const newReply = {
            firstName: me.firstName,
            lastName: me.lastName,
            likes: [],
            note: action.value.note,
            reply: [],
            userId: me.id
          };

          state.dashboardReducer.posts.map((post) => {
            if(post.id === action.value.postId) {
              post.reply = [
                newReply,
                ...post.reply
              ]
            } else {
              return post;
            }
          });

          return state;
        });
    });
    yield put(postDetailsActions.requestPostReplySuccess(data));
  } catch (error) {
    yield put(postDetailsActions.requestPostReplyError());
  }
}

export default watchPostReply;