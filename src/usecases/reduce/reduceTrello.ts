import Board from "../../entities";
import List from "../../entities/List";
import { Tstate } from "../../redux/reducers";
import { getSelectedBoard, getSelectedBoardIndex } from "../../utils/helpers";

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
