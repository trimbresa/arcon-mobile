import BaseService from "./BaseService";

import api from "../config/api.json";
import {SCHEDULE_TABS} from "../global/constants";

class ScheduleService extends BaseService {
  /**
   * @memberof BaseService
   */
  fetchMySchedule(startDate, endDate) {
    const params = `?startDate=${startDate}&endDate=${endDate}`;
    return this.apiGet({
      url: `${api.mySchedule}${params}`,
    });
  }

  fetchSchedules(filters, type) {
    const filtersArray = Object.keys(filters);
    const params = filtersArray.reduce(
      (a, b, i) =>
        a + `${b}=${filters[b]}${i === filtersArray.length - 1 ? "" : "&"}`,
      "?",
    );

    return this.apiGet({
      url: `${
        type === SCHEDULE_TABS.EMPLOYEE_SCHEDULE
          ? api.employeeSchedules
          : api.departmentSchedules
      }${params}`,
    });
  }
}

export default new ScheduleService();
