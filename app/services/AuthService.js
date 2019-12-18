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

  changePassword = (oldPass, newPass) => {
    return this.apiPost({
      url: api.changePassword,
      data: {
        password: oldPass,
        newPassword: newPass,
      },
    });
  };

  askForPasswordReset = data => {
    return this.apiPost({
      url: api.askForPasswordReset,
      data,
    });
  };

  verifyCode = data => {
    return this.apiPost({
      url: api.verifyCode,
      data,
    });
  };

  resetPassword = data => {
    return this.apiPut({
      url: api.resetPassword,
      data,
    });
  };
}

export default new AuthService();
