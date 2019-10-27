import {takeEvery, put, call} from "redux-saga/effects";
import * as dashboardActions from "./actions";
import * as constants from "./constants";

// Services
import DashboardService from "../../services/DashboardService";

// Sagas
function* watchDashboard() {
  yield takeEvery(constants.FETCHED_DASHBOARD, fetchDashboardAsync);
}

function* fetchDashboardAsync() {
  try {
    yield put(dashboardActions.requestDashboard());
    const data = yield call(async () => {
      return DashboardService.fetchDashboard()
        .then((res) => {
          return (res.data);
        });
    });
    yield put(dashboardActions.requestDashboardSuccess(data));
  } catch (error) {
    yield put(dashboardActions.requestDashboardError());
  }
}

export default watchDashboard;