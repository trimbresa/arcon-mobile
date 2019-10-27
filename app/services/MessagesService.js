import BaseService from "./BaseService";

import api from "../config/api.json";

class MessagesService extends BaseService {
  /**
   * @memberof MessagesService
   */
  fetchMessages() {
    return this.apiGet({
      url: api.messages,
    });
  }
}

export default new MessagesService();
