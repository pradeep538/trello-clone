import Board from "../../entities";
import List from "../../entities/List";
import Task from "../../entities/Task";
import { Tstate } from "../../redux/reducers";
import { getSelectedBoard, getSelectedBoardIndex } from "../../utils/helpers";
import { TDragAndDropMetadata } from "../../utils/types";
import { TState } from "../../views/components/ErrorBoundry/ErrorBoundry";

export const addBoard = (state: Tstate, data: any) => {
  let { boards } = state;
  let board = new Board(data);
  boards.push(board);
  console.log("UPDATED STATE BOARD=>", state);
  return { ...state };
};
export const selectedBoard = (state: Tstate, data: any) => {
  state.selectedBoard = data.taskName;
  return { ...state };
};
export const addNewTaskList = (state: Tstate, data: any) => {
  let { boards } = state;
  let boardIndex: number = getSelectedBoardIndex(
    state.selectedBoard,
    state.boards
  );
  let list = new List(data.taskName);
  boards[boardIndex].list.push(list);
  console.log("UPDATED STATE TASKLIST=>", state);
  return { ...state };
};
export const addTaskToList = (state: Tstate, data: any) => {
  let { boards } = state;
  let boardIndex: number = getSelectedBoardIndex(
    state.selectedBoard,
    state.boards
  );
  let task = new Task(data.taskName);
  boards[boardIndex].list[data.taskListId].tasks.push(task);
  console.log("STORE UPDATED TO TASK=>", state);
  return { ...state };
};
export const toggleTask = (state: Tstate, data: any) => {
  let { boards } = state;
  let selectedBoardIndex: number = getSelectedBoardIndex(
    state.selectedBoard,
    state.boards
  );
  let { list } = boards[selectedBoardIndex];
  let { tasks } = list[data.taskListId];
  let { status } = tasks[data.taskID];
  tasks[data.taskID].status = !status;
  console.log("STORE UPDATED TO TASK=>", state);
  return { ...state };
};
export const updateDragAndDrop = (
  state: Tstate,
  dragAndDropMetadata: {
    selectedBoard: string;
    fromMetadata: TDragAndDropMetadata;
    toMetadata: TDragAndDropMetadata;
  }
) => {
  let { boards } = state;
  let selectedBoardIndex: number = getSelectedBoardIndex(
    state.selectedBoard,
    state.boards
  );
  let { fromMetadata, toMetadata } = dragAndDropMetadata;
  let { list } = boards[selectedBoardIndex];
  let fromTaskList: List = list[fromMetadata.taskListId];
  let toTaskList: List = list[toMetadata.taskListId];

  if (fromMetadata.taskListId === toMetadata.taskListId) {
    fromTaskList.shiftToPosition(fromMetadata.taskID, toMetadata.taskID);
  } else {
    let board: Board = boards[selectedBoardIndex];
    board.shiftToPosition(fromMetadata, toMetadata);
  }
  console.log("DRAGGED DATA==>", state);
  return { ...state };
};
