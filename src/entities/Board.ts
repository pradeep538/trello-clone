import List from "./List";

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
}
export default Board;
