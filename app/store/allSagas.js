import { all, fork } from 'redux-saga/effects';

import dashboardSagas from "../views/Dashboard/sagas";
import scheduleSagas from "../views/Schedule/sagas";
import newPostSagas from "../views/NewPost/sagas";
import messagesSagas from "../views/Messages/sagas";

function* rootSaga () {
  yield all([
      fork(dashboardSagas),
      fork(scheduleSagas),
      fork(newPostSagas),
      fork(messagesSagas),
  ]);
}

export default rootSaga;
