import BaseService from "./BaseService";

import api from "../config/api.json";

class DashboardService extends BaseService {
  /**
   * @memberof DashboardService
   */
  fetchDashboard() {
    return this.apiGet({
      url: api.dashboard,
    });
  }
}

export default new DashboardService();
