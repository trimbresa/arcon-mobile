import {all, fork} from "redux-saga/effects";

import dashboardSagas from "../views/Dashboard/sagas";
import scheduleSagas from "../views/Schedule/sagas";
import newPostSagas from "../views/NewPost/sagas";
import messagesSagas from "../views/Messages/sagas";
import chatSagas from "../views/Chat/sagas";
import postDetailsSagas from "../views/PostDetails/sagas";
import allEventsSagas from "../views/AllEvents/sagas";

function* rootSaga() {
  yield all([
    fork(dashboardSagas),
    fork(scheduleSagas),
    fork(newPostSagas),
    fork(messagesSagas),
    fork(chatSagas),
    fork(postDetailsSagas),
    fork(allEventsSagas),
  ]);
}

export default rootSaga;
