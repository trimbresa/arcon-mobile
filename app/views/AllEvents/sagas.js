import {takeEvery, put, call, select} from "redux-saga/effects";
import * as allEventsActions from "./actions";
import * as constants from "./constants";
import moment from "moment";

// Services
import ScheduleService from "../../services/ScheduleService";

// Sagas
function* watchDaySchedules() {
  yield takeEvery(constants.REQUEST_DAY_SCHEDULES, fetchSchedulesAsync);
}

function* fetchSchedulesAsync({
  value: {type, startDate, endDate, page, refreshing = false},
}) {
  try {
    yield put(allEventsActions.requestDaySchedules());
    const data = yield call(async () => {
      return ScheduleService.fetchSchedules(
        {
          startDate,
          endDate,
          page: refreshing ? 1 : page,
          limitPerDay: 10,
        },
        type,
      ).then(res => {
        return res.data;
      });
    });
    yield put(
      allEventsActions.requestDaySchedulesSuccess({
        data: Object.values(data)[0].events,
        refreshing,
        haveAllSchedulesLoaded: Object.values(data)[0].events.length < 10,
      }),
    );
  } catch (error) {
    yield put(allEventsActions.requestDaySchedulesError());
  }
}

export default watchDaySchedules;
