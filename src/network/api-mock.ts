import * as mockData from "./api-mock-data";
import * as URL from "./apiroutes";
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance

class MockApiTrello {
  setupMock() {
    const mock = new MockAdapter(axios, { delayResponse: 500 });

    mock.onPost(URL.ADD_BOARD).reply((config: any) => {
      return new Promise(function (resolve, reject) {
        const { data } = config;
        try {
          const body = JSON.parse(data);
          let boards = mockData.addboards(body);
          resolve([200, boards]);
        } catch (Error) {
          let errorMessage = "Error occured while adding boards";
          console.log(errorMessage);
          reject(errorMessage);
        }
      });
    });
  }
}
const mockApiInstance = new MockApiTrello();
export default mockApiInstance;
