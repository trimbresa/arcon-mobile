import {takeEvery, put, call} from "redux-saga/effects";
import * as dashboardActions from "./actions";
import * as constants from "./constants";

// Services
import MessagesService from "../../services/MessagesService";

// Sagas
function* watchMessages() {
  yield takeEvery(constants.FETCHED_MESSAGES, fetchMessagesAsync);
}

function* fetchMessagesAsync() {
  try {
    yield put(dashboardActions.requestMessages());
    const data = yield call(async () => {
      return MessagesService.fetchMessages()
        .then((res) => {
          return (res.data.receive);
        });
    });
    yield put(dashboardActions.requestMessagesSuccess(data));
  } catch (error) {
    yield put(dashboardActions.requestMessagesError());
  }
}

export default watchMessages;