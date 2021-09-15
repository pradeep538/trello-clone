import Api from "../network/api";
import { Tstate } from "../redux/reducers";

export interface configObject {
  store: any;
  api: Api;
}
export interface UseCasesInterface {
  storeInstance: any;
  apiInstance: any;
}
class UseCaseRef implements UseCasesInterface {
  storeInstance: any;
  apiInstance: any;
  initialize(configObject: configObject) {
    this.storeInstance = configObject.store;
    this.apiInstance = configObject.api;
  }
}
const useCaseInstance = new UseCaseRef();
export default useCaseInstance;
