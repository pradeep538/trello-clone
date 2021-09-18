import Board from "../../entities/Board";
import List from "../../entities/List";
/* import { boardsMock } from "../../network/api-mock-data"; */
import {
  addBoard,
  addNewTaskList,
  addTaskToList,
  selectedBoard,
  toggleTask,
  updateDragAndDrop,
} from "../../usecases/reduce/reduceTrello";

import * as Actions from "../actions/types";

export type Tstate = {
  boards: Board[];
  selectedBoard: string;
};

const initialState: Tstate = {
  /* boards: [...boardsMock], */
  boards: [],
  selectedBoard: "",
};
export default function trelloReducer(
  state: Tstate = initialState,
  action: any
) {
  switch (action.type) {
    case Actions.ADD_BOARD:
      return { ...addBoard(state, action.payload) };
    case Actions.SELECTED_BOARD:
      return { ...selectedBoard(state, action.payload) };
    case Actions.ADD_NEW_TASK_LIST:
      return { ...addNewTaskList(state, action.payload) };
    case Actions.ADD_TASK_TO_LIST:
      return { ...addTaskToList(state, action.payload) };
    case Actions.TOGGLE_TASK_STATUS:
      return { ...toggleTask(state, action.payload) };
    case Actions.UPDATE_DRAG_AND_DROP:
      return { ...updateDragAndDrop(state, action.payload) };
    case Actions.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}
