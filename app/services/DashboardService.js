import BaseService from "./BaseService";

import api from "../config/api.json";
import moment from "moment";

class DashboardService extends BaseService {
  /**
   * @memberof DashboardService
   */
  fetchSchedules() {
    return this.apiGet({
      url:
        api.todaysSchedules +
        `?startDate=${moment()
          .startOf("day")
          .toISOString()}&endDate=${moment()
          .endOf("day")
          .toISOString()}`,
    });
  }

  fetchPosts(pageNr) {
    return this.apiGet({
      url: api.posts + `?page=${pageNr}&perPage=10`,
    });
  }
}

export default new DashboardService();
