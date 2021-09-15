import Task from "./Task";

class List {
  name: string;
  tasks?: Task[];
  constructor(name: string) {
    this.name = name;
    this.tasks = [];
  }
}

export default List;
