export type TAddNewTask = {
  selectedBoard: string;
  taskName: string;
  taskListId: number;
};
export type TToggleTaskStatus = {
  selectedBoard: string;
  taskListId: number;
  taskID: number;
};
export type TDragAndDropMetadata = {
  taskListId: number;
  taskID: number;
};
