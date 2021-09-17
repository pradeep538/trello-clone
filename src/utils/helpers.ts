import Board from "../entities";

export const getSelectedBoard = (selectedBoard: string, boards: Board[]) => {
  const board = boards.find((board: Board) => board.name === selectedBoard);
  return board;
};

export const getSelectedBoardIndex = (
  selectedBoard: string,
  boards: Board[]
) => {
  const board = boards.findIndex(
    (board: Board) => board.name === selectedBoard
  );
  return board;
};
