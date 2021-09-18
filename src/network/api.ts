import Network from "./network";
import * as URL from "./apiroutes";
import { TDragAndDropMetadata, TToggleTaskStatus } from "../utils/types";
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
  addTaskToList(data: any) {
    return this.api.post(URL.ADD_TASK_TO_LIST, data);
  }
  toggleTaskStatus(data: TToggleTaskStatus) {
    return this.api.post(URL.TOGGLE_TASK, data);
  }
  updateDragAndDrop(
    selectedBoard: string,
    fromMetadata: TDragAndDropMetadata,
    toMetadata: TDragAndDropMetadata
  ) {
    return this.api.post(URL.UPDATE_DRAG_AND_DROP, {
      selectedBoard,
      fromMetadata,
      toMetadata,
    });
  }
}
export default Api;
