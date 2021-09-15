export type TProps = {
  name: string;
  addTaskHandler: (event: any) => void;
  taskList: any[];
};
const TaskListItem = (props: TProps) => {
  const completedCount = props.taskList.filter((item) => !item.status);
  return (
    <div className="task-list-item task-created">
      <div className="task-item-container">
        <div className="task-title">
          <div className="title">{props.name}</div>
          <span>
            <i className="fas fa-ellipsis-v"></i>
          </span>
        </div>
        <div className="add-task">
          <a href="#" className="add-task" onClick={props.addTaskHandler}>
            <i className="fas fa-plus"></i> <span>Add a task</span>
          </a>
        </div>
        {props.taskList.map((task) => {
          if (task.status) {
            return (
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">{task.title}</div>
              </div>
            );
          }
        })}

        <div className="completed-list">
          <div>
            <label>Completed</label>(<span>{completedCount.length}</span>)
          </div>
          {props.taskList.map((task) => {
            if (!task.status) {
              return (
                <div className="task-list-radio">
                  <span className="task-circle">
                    <i className="fas fa-check"></i>
                  </span>
                  <div className="task-completed">{task.title}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default TaskListItem;
