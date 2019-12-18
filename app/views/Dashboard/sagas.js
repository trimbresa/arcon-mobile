import {takeEvery, put, call} from "redux-saga/effects";
import * as dashboardActions from "./actions";
import * as constants from "./constants";

// Services
import DashboardService from "../../services/DashboardService";
import FilterService from "../../services/FilterService";

// Sagas
function* watchDashboard() {
  yield takeEvery(constants.FETCHED_DASHBOARD, fetchPostsAsync);
  yield takeEvery(constants.FETCHED_LOCATIONS, fetchLocationsAsync);
}

function* fetchPostsAsync({value: {pageNr, refresh}}) {
  try {
    yield put(dashboardActions.requestDashboard());
    const data = yield call(async () => {
      return DashboardService.fetchPosts(pageNr).then(res => {
        return res.data;
      });
    });
    yield put(
      dashboardActions.requestDashboardSuccess({
        data,
        refresh,
        haveAllPostsLoaded: data.length < 10,
      }),
    );
  } catch (error) {
    yield put(dashboardActions.requestDashboardError());
  }
}

function* fetchLocationsAsync() {
  try {
    const data = yield call(async () => {
      return FilterService.getAllLocations().then(res => {
        return res.data;
      });
    });
    yield put(dashboardActions.requestLocationsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default watchDashboard;
