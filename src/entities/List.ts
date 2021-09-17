import Task from "./Task";

class List {
  name: string;
  tasks?: Task[];
  constructor(name: string) {
    this.name = name;
    this.tasks = [];
  }
  shiftToPosition(fromPosition: number, toPosition: number) {
    if (!this.tasks?.length) {
      return;
    }
    if (
      this.tasks?.length &&
      (this.tasks?.length < fromPosition || this.tasks?.length < toPosition)
    ) {
      return;
    }
    this.tasks?.splice(toPosition, 0, ...this.tasks.splice(fromPosition, 1));
  }
  toggleStatus(position: number) {
    if (!this.tasks?.length) return;
    let task = this.tasks[position];
    if (task) task.status = !task.status;
  }
}

export default List;
