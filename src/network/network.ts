const axios = require("axios");
class Network {
  apiInstance: any;
  baseUrl: string;
  timeout: number;
  headers: any;
  constructor(baseUrl: string, timeout: number) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
    this.headers = { "X-Custom-Header": "trello" };
    this.apiInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeout,
      headers: this.headers,
    });
  }
  getNetworkInstance() {
    return this.apiInstance;
  }
}
export default Network;
