import BaseService from "./BaseService";

import api from "../config/api.json";

class MessagesService extends BaseService {
  /**
   * @memberof MessagesService
   */
  newMessage({threadId, note, attachment}) {
    const body = [
      {
        name: "body",
        data: note,
      },
    ];

    return this.withAttachment({
      route: `${api.messages}/${threadId}/create`,
      attachment,
      body,
    });
  }

  /**
   * @memberof MessagesService
   */
  fetchMessages(params) {
    const query =
      "?" +
      Object.keys(params)
        .map(p => `${p}=${params[p]}`)
        .join("&");

    return this.apiGet({
      url: `${api.messages}${query}`,
    });
  }

  /**
   * @memberof MessagesService
   */
  markRead(id) {
    return this.apiPost({
      url: `${api.messages}/${id}`,
    });
  }

  /**
   * @memberof MessagesService
   */
  fetchMessageDetails({id, ...params}) {
    const query =
      "?" +
      Object.keys(params)
        .map(p => `${p}=${params[p]}`)
        .join("&");

    return this.apiGet({
      url: `${api.messages}/${id}${query}`,
    });
  }
}

export default new MessagesService();
