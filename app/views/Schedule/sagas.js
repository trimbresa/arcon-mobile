import {takeEvery, put, call, select} from "redux-saga/effects";
import * as scheduleActions from "./actions";
import * as constants from "./constants";
import moment from "moment";

// Services
import ScheduleService from "../../services/ScheduleService";

// Sagas
function* watchSchedule() {
  yield takeEvery(constants.FETCHED_SCHEDULE, fetchScheduleAsync);
}

function* fetchScheduleAsync() {
  try {
    const store = yield select();
    yield put(scheduleActions.requestSchedule());
    const data = yield call(async () => {
      const activeMonth = store.scheduleReducer.activeMonth;

      const startDate = moment(activeMonth).subtract(1, 'month').toISOString();
      const endDate = moment(activeMonth).add(2, 'months').toISOString();

      return ScheduleService.fetchSchedule(startDate, endDate)
        .then((res) => {
          return (res.data);
        });
    });
    yield put(scheduleActions.requestScheduleSuccess(data));
  } catch (error) {
    console.log("Error: ", error);
    yield put(scheduleActions.requestScheduleError());
  }
}

export default watchSchedule;