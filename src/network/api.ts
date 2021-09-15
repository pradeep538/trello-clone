import Network from "./network";
import * as URL from "./apiroutes";
if (process.env.NODE_ENV === "development") {
  const MockApi = require("./api-mock");
  console.log(MockApi);
  // setup mock data for development env
  MockApi.default.setupMock();
}
class Api {
  api: any;
  constructor(baseUrl: string, timeout: number) {
    this.api = new Network(baseUrl, timeout);
  }
  addBoard(data: any) {
    return this.api.post(URL.ADD_BOARD, data);
  }
}
export default Api;
