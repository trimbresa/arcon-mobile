import {takeEvery, put, call, select} from "redux-saga/effects";
import * as scheduleActions from "./actions";
import * as constants from "./constants";
import moment from "moment";
import {SCHEDULE_TABS} from "../../global/constants";

// Services
import ScheduleService from "../../services/ScheduleService";
import FilterService from "../../services/FilterService";

// Sagas
function* watchSchedule() {
  yield takeEvery(constants.FETCHED_SCHEDULE, fetchScheduleAsync);
  yield takeEvery(constants.FETCHED_DEPARTMENTS, fetchDepartmentsAsync);
  yield takeEvery(constants.FETCHED_JOBS, fetchJobsAsync);
}

function* fetchScheduleAsync({value: {date, type, filters, refreshing}}) {
  const startDate = moment(date).startOf("month");
  const endDate = moment(date).endOf("month");

  if (refreshing) endDate.add(1, "month");

  try {
    yield put(scheduleActions.requestSchedule());
    const data = yield call(async () => {
      return type === SCHEDULE_TABS.MY_SCHEDULE
        ? ScheduleService.fetchMySchedule(
            startDate.format("YYYY-MM-DD"),
            endDate.format("YYYY-MM-DD"),
          ).then(res => {
            return res.data;
          })
        : ScheduleService.fetchSchedules(
            {
              startDate: startDate.format("YYYY-MM-DD"),
              endDate: endDate.format("YYYY-MM-DD"),
              page: 0,
              ...filters,
            },
            type,
          ).then(res => {
            return res.data;
          });
    });

    yield put(
      scheduleActions.requestScheduleSuccess({
        data,
        startDate,
        endDate,
        type,
        refreshing,
      }),
    );
  } catch (error) {
    console.log("Error: ", error);
    yield put(scheduleActions.requestScheduleError());
  }
}

function* fetchDepartmentsAsync() {
  try {
    yield put(scheduleActions.requestSchedule());
    const data = yield call(async () => {
      return FilterService.getAllDepartments().then(res => {
        return res.data.departments;
      });
    });
    yield put(scheduleActions.requestDepartmentsSuccess({data}));
  } catch (error) {
    console.log("Error: ", error);
    yield put(scheduleActions.requestDepartmentsError());
  }
}

function* fetchJobsAsync() {
  try {
    yield put(scheduleActions.requestJobs());
    const data = yield call(async () => {
      return FilterService.getAllJobs().then(res => {
        return res.data.jobs;
      });
    });
    yield put(scheduleActions.requestJobsSuccess({data}));
  } catch (error) {
    console.log("Error: ", error);
    yield put(scheduleActions.requestJobsError());
  }
}

export default watchSchedule;
