import {
  addBoard,
  addNewTaskList,
  addTaskToList,
  selectedBoard,
  toggleTask,
  updateDragAndDrop,
} from "../../redux/actions/index";
import storeInstance from "../../redux/store";
import useCaseInstance from "..";
import {
  TAddNewTask,
  TDragAndDropMetadata,
  TToggleTaskStatus,
} from "../../utils/types";
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
export const addTaskToListData = (newTask: TAddNewTask) => {
  let addTaskToListResponse =
    useCaseInstance.apiInstance.addTaskToList(newTask);
  console.log(addTaskToListResponse);
  addTaskToListResponse
    .then((response: any) => {
      if (response.status === 201) {
        storeInstance.dispatch(addTaskToList(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });
  return addTaskToListResponse;
};
export const toggleTaskStatus = (toggleTaskData: TToggleTaskStatus) => {
  let toggleTaskResponse =
    useCaseInstance.apiInstance.toggleTaskStatus(toggleTaskData);
  console.log(toggleTaskResponse);
  toggleTaskResponse
    .then((response: any) => {
      if (response.status === 201) {
        storeInstance.dispatch(toggleTask(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });
  return toggleTaskResponse;
};
export const updateDragAndDropData = (
  selectedBoard: string,
  fromMetadata: TDragAndDropMetadata,
  toMetadata: TDragAndDropMetadata
) => {
  let toggleTaskResponse = useCaseInstance.apiInstance.updateDragAndDrop(
    selectedBoard,
    fromMetadata,
    toMetadata
  );
  console.log(toggleTaskResponse);
  toggleTaskResponse
    .then((response: any) => {
      if (response.status === 201) {
        storeInstance.dispatch(updateDragAndDrop(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });
  return toggleTaskResponse;
};
