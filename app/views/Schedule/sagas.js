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

function* fetchScheduleAsync({value: {activeMonth}}) {
  const startDate = moment(activeMonth).subtract(1, "month");
  const endDate = moment(activeMonth).add(2, "months");

  try {
    yield put(scheduleActions.requestSchedule());
    const data = yield call(async () => {
      return ScheduleService.fetchSchedule(
        startDate.format("YYYY-MM-DD"),
        endDate.format("YYYY-MM-DD"),
      ).then(res => {
        return res.data;
      });
    });
    yield put(
      scheduleActions.requestScheduleSuccess({data, startDate, endDate}),
    );
  } catch (error) {
    console.log("Error: ", error);
    yield put(scheduleActions.requestScheduleError());
  }
}

export default watchSchedule;
