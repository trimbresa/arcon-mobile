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

  /**
   * @memberof MessagesService
   */
  fetchMessageDetails(msgId) {
    return this.apiGet({
      url: `${api.messages}/${msgId}`,
    });
  }
}

export default new MessagesService();
