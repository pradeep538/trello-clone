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
