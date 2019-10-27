import axios from "axios";
import StorageManager from '../helpers/StorageManager';

import {baseURL} from "../config/api.json";

axios.interceptors.request.use(async (config) => {
  const token = await StorageManager.get('token');
  const bearerToken = `Bearer ${token}`;
  config.baseURL = process.env.NODE_ENV === "development"
  ? "http://192.168.0.105:3001" : baseURL;
  config.headers.Authorization = bearerToken;

  return config;
}, (error) => {
  return Promise.reject(error);
});

class BaseService {
  apiPost(options) {
    return axios.post(options.url, options.data);
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
}

export default BaseService;
