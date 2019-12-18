import {takeEvery, put, call} from "redux-saga/effects";
import * as dashboardActions from "./actions";
import * as constants from "./constants";

// Services
import MessagesService from "../../services/MessagesService";

// Sagas
function* watchMessages() {
  yield takeEvery(constants.FETCHED_MESSAGES, fetchMessagesAsync);
}

function* fetchMessagesAsync({value: {page, refreshing}}) {
  try {
    yield put(dashboardActions.requestMessages());
    const data = yield call(async () => {
      return MessagesService.fetchMessages({
        page,
        limit: 10,
        order: "desc",
      }).then(res => {
        return res.data.receive;
      });
    });
    yield put(
      dashboardActions.requestMessagesSuccess({
        messages: data,
        refreshing,
        haveAllMessagesLoaded: data.length < 10,
      }),
    );
  } catch (error) {
    console.log(error);
    yield put(dashboardActions.requestMessagesError());
  }
}

export default watchMessages;
