import { TDragAndDropMetadata } from "../utils/types";
import List from "./List";
import Task from "./Task";

class Board {
  name: string;
  list!: List[];
  constructor(name: string) {
    this.name = name;
    this.list = [];
  }
  setName(name: string) {
    this.name = name;
  }
  addTaskList(taskListName: string) {
    let newTask = new List(taskListName);
    this.list.push(newTask);
  }
  shiftToPosition(
    fromPosition: TDragAndDropMetadata,
    toPosition: TDragAndDropMetadata
  ) {
    if (!this.list?.length) {
      return;
    }
    if (
      this.list?.length &&
      (this.list?.length < fromPosition.taskListId ||
        this.list?.length < toPosition.taskListId)
    ) {
      return;
    }
    let fromTaskList: List = this.list[fromPosition.taskListId];
    let toTaskList: List = this.list[toPosition.taskListId];
    let removedElement: Task[] = fromTaskList.tasks.splice(
      fromPosition.taskID,
      1
    );
    toTaskList.tasks.splice(toPosition.taskID, 0, ...removedElement);
  }
}
export default Board;
