import * as mockData from "./api-mock-data";
import * as URL from "./apiroutes";
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance

class MockApiTrello {
  setupMock() {
    const mock = new MockAdapter(axios, { delayResponse: 0 });

    mock.onPost(URL.ADD_BOARD).reply((config: any) => {
      const { data } = config;
      let boards = mockData.addboards(data);
      return new Promise(function (resolve, reject) {
        return resolve([201, data]);
      });
    });
    mock.onPost(URL.ADD_NEW_TASK_LIST).reply((config: any) => {
      const { data } = config;
      let reqData = JSON.parse(data);
      mockData.addNewTaskList(reqData);
      return new Promise(function (resolve, reject) {
        return resolve([201, reqData]);
      });
    });
  }
}
export const mockApiInstance = new MockApiTrello();
