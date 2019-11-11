import {takeEvery, put, call} from "redux-saga/effects";
import * as dashboardActions from "./actions";
import * as constants from "./constants";

// Services
import MessagesService from "../../services/MessagesService";
import StorageManager from "../../helpers/StorageManager";

// Sagas
function* watchMessageDetails() {
  yield takeEvery(constants.FETCHED_MESSAGE_DETAILS, fetchMessageDetailsAsync);
}

function* fetchMessageDetailsAsync(action) {
  try {
    yield put(dashboardActions.requestMessageDetails());
    const data = yield call(async () => {
      const userData = await StorageManager.get('user');
      const {id = null} = userData;

      console.log(userData);

      return MessagesService.fetchMessageDetails(action.value)
        .then((res) => {
          return {
            myId: id,
            threads: res.data.threads
          }
        });
    });
    yield put(dashboardActions.requestMessageDetailsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(dashboardActions.requestMessageDetailsError());
  }
}

export default watchMessageDetails;