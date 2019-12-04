import BaseService from "./BaseService";
import api from "../config/api.json";

class AuthService extends BaseService {
  /**
   * @param {{ employeeCode: String, password: String }}
   * @memberof AuthService
   */
  login(employeeCode = "", password = "") {
    console.log(employeeCode, password);
    return this.apiPost({
      url: api.authenticate,
      data: {
        employeeCode,
        password,
      },
    });
  }

  resetPassword = (oldPass, newPass) => {
    return this.apiPost({
      url: api.resetPassword,
      data: {
        password: oldPass,
        newPassword: newPass,
      },
    });
  };
}

export default new AuthService();
