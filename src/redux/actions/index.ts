import * as Actions from "../actions/types";
export const addBoard = (data: any) => ({
  type: Actions.ADD_BOARD,
  payload: data,
});
export const selectedBoard = (data: string) => ({
  type: Actions.SELECTED_BOARD,
  payload: data,
});
export const addNewTaskList = (data: string) => ({
  type: Actions.ADD_NEW_TASK_LIST,
  payload: data,
});
export const addTaskToList = (data: string) => ({
  type: Actions.ADD_TASK_TO_LIST,
  payload: data,
});
export const toggleTask = (data: any) => ({
  type: Actions.TOGGLE_TASK_STATUS,
  payload: data,
});
export const updateDragAndDrop = (data: any) => ({
  type: Actions.UPDATE_DRAG_AND_DROP,
  payload: data,
});
