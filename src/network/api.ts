import Network from "./network";
import * as URL from "./apiroutes";
if (process.env.NODE_ENV === "development") {
  const MockApi = require("./api-mock").mockApiInstance;
  console.log(MockApi);
  // setup mock data for development env
  MockApi.setupMock();
}
class Api {
  api: any;
  constructor(baseUrl: string, timeout: number) {
    let api = new Network(baseUrl, timeout);
    this.api = api.apiInstance;
  }
  addBoard(data: any) {
    return this.api.post(URL.ADD_BOARD, data);
  }
  addNewTaskList(data: any) {
    return this.api.post(URL.ADD_NEW_TASK_LIST, data);
  }
}
export default Api;
