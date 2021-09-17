import {
  addBoard,
  addNewTaskList,
  selectedBoard,
} from "../../redux/actions/index";
import storeInstance from "../../redux/store";
import useCaseInstance from "..";
export const addNewTaskListData = (data: any) => {
  let store = storeInstance.getState().trelloReducer;
  let newTask = {
    selectedBoard: store.selectedBoard,
    taskName: data,
  };
  let addNewTaskListResponse =
    useCaseInstance.apiInstance.addNewTaskList(newTask);
  console.log(addNewTaskListResponse);
  addNewTaskListResponse
    .then((response: any) => {
      if (response.status === 201) {
        storeInstance.dispatch(addNewTaskList(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });
  return addNewTaskListResponse;
};
