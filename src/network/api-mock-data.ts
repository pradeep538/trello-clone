import Board from "../entities";
import List from "../entities/List";
import Task from "../entities/Task";
import useCaseInstance from "../usecases/index";
import { getSelectedBoard, getSelectedBoardIndex } from "../utils/helpers";
import { TDragAndDropMetadata, TToggleTaskStatus } from "../utils/types";
export const boardsStore: Board[] = [];
/* export let boardsMock: Board[] = [];
let board1 = new Board("sample board 1");
let board2 = new Board("sample board 2");
let board3 = new Board("sample board 3");
let board4 = new Board("sample board 4");
let list1 = new List("Task List 1");
list1.tasks = [];
board1.list.push(list1);
let list2 = new List("Task List 2");
list1.tasks = [];
board1.list.push(list2);
let list3 = new List("Task List 3");
list1.tasks = [];
board1.list.push(list3);
let list4 = new List("Task List 4");
list1.tasks = [];
board1.list.push(list4);
let list5 = new List("Task List 5");
list1.tasks = [];
board1.list.push(list5);

boardsMock.push(board1);
boardsMock.push(board2);
boardsMock.push(board3);
boardsMock.push(board4); */

export const addboards = (boardName: string) => {
  let board = new Board(boardName);
  boardsStore.push(board);
  return boardsStore;
};
export const addNewTaskList = (taskData: any) => {
  let store = useCaseInstance.storeInstance.getState().trelloReducer;
  let newTask: List = new List(taskData.taskName);
  /* let selectedBoard = getSelectedBoard(taskData.selectedBoard, store.boards); */
  let selectedBoardIndex = getSelectedBoardIndex(
    taskData.selectedBoard,
    store.boards
  );
  boardsStore[selectedBoardIndex].list.push(newTask);
  console.log("LOCAL DB=>", boardsStore);
};
export const addTaskToList = (taskData: any) => {
  let store = useCaseInstance.storeInstance.getState().trelloReducer;
  let selectedBoardIndex = getSelectedBoardIndex(
    taskData.selectedBoard,
    store.boards
  );
  let task = new Task(taskData.taskName);
  boardsStore[selectedBoardIndex].list[taskData.taskListId].tasks.push(task);
  console.log("LOCAL DB=>", boardsStore);
};

export const toggleTask = (taskData: TToggleTaskStatus) => {
  let store = useCaseInstance.storeInstance.getState().trelloReducer;
  let selectedBoardIndex = getSelectedBoardIndex(
    taskData.selectedBoard,
    store.boards
  );
  let { list } = boardsStore[selectedBoardIndex];
  let { tasks } = list[taskData.taskListId];
  let { status } = tasks[taskData.taskID];
  tasks[taskData.taskID].status = !status;
  console.log("LOCAL DB=>", boardsStore);
};
export const updateDragAndDrop = (dragAndDropMetadata: {
  selectedBoard: string;
  fromMetadata: TDragAndDropMetadata;
  toMetadata: TDragAndDropMetadata;
}) => {
  return true;
};
