import BaseService from "./BaseService";

import api from "../config/api.json";

class ScheduleService extends BaseService {
  /**
   * @memberof BaseService
   */
  fetchSchedule(startDate, endDate) {
    const params = `?startDate=${startDate}&endDate=${endDate}`;
    return this.apiGet({
      url: `${api.mySchedule}${params}`,
    });
  }
}

export default new ScheduleService();
