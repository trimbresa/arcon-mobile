import BaseService from "./BaseService";
import api from "../config/api.json";

class AuthService extends BaseService {
  /**
   * @param {{ employeeCode: String, password: String }}
   * @memberof AuthService
   */
  login(employeeCode = "", password = "") {
    return this.apiPost({
      url: api.authenticate,
      data: {
        employeeCode,
        password,
      },
    });
  }
}

export default new AuthService();
