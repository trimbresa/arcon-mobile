import {takeEvery, put, call} from "redux-saga/effects";
import * as dashboardActions from "./actions";
import * as constants from "./constants";

// Services
import MessagesService from "../../services/MessagesService";
import StorageManager from "../../helpers/StorageManager";

// Sagas
function* watchMessageDetails() {
  yield takeEvery(constants.FETCHED_CHAT, fetchMessageDetailsAsync);
}

function* fetchMessageDetailsAsync({value: {page, id, refreshing}}) {
  try {
    yield put(dashboardActions.requestMessageDetails());
    const data = yield call(async () => {
      return MessagesService.fetchMessageDetails({
        page,
        id,
        limit: 10,
        order: "desc",
      }).then(res => {
        return {
          threads: res.data.threads,
          attachments: res.data.mapAttachments,
          haveAllThreadsLoaded: res.data.threads.length < 10,
          refreshing,
        };
      });
    });
    yield put(dashboardActions.requestMessageDetailsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(dashboardActions.requestMessageDetailsError());
  }
}

export default watchMessageDetails;
