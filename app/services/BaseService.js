import axios from "axios";
import StorageManager from "../helpers/StorageManager";
import RNFetchBlob from "rn-fetch-blob";
import api from "../config/api.json";

import {baseURL} from "../config/api.json";

axios.interceptors.request.use(
  async config => {
    const token = await StorageManager.get("token");
    const bearerToken = `Bearer ${token}`;

    config.baseURL = baseURL;
    config.headers.Authorization = bearerToken;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

class BaseService {
  apiPost(options) {
    return axios.post(options.url, options.data, options.config);
  }

  async apiGet(options) {
    return await axios.get(options.url);
  }

  apiDelete(options) {
    return axios.delete(options.url);
  }

  apiPut(options) {
    return axios.put(options.url, options.data);
  }

  withAttachment = async ({route, attachment, body: initialBody}) => {
    const token = await StorageManager.get("token");

    const body = [...initialBody];

    if (attachment)
      if (attachment.type === "url")
        body.push({
          name: "attachmentUrl",
          data: attachment.url,
        });
      else
        body.push({
          name: "attachment",
          filename: attachment.filename,
          type: attachment.type,
          data: RNFetchBlob.wrap(attachment.path || attachment.uri),
        });

    return RNFetchBlob.fetch(
      "POST",
      api.baseURL + route,
      {
        Authorization: "Bearer " + token,
        "Content-Type":
          !attachment || attachment.type === "url"
            ? "application/json"
            : "multipart/form-data",
      },
      body,
    )
      .then(resp => {
        return resp.data;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };
}

export default BaseService;
