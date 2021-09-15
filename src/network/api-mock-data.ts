import Board from "../entities";

export const boardsStore: Board[] = [];
export const addboards = (board: Board) => {
  boardsStore.push(board);
  return boardsStore;
};
