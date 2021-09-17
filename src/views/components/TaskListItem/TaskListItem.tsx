import Task from "../../../entities/Task";
import ToggleForm from "../ToggleForm/ToggleForm";

export type TProps = {
  name: string;
  addTaskHandler: (input: string) => void;
  taskList?: Task[];
};
const TaskListItem = (props: TProps) => {
  const completedCount =
    (props.taskList && props.taskList.filter((item) => !item.status)) || [];

  return (
    <div className="task-list-item task-created" draggable="true">
      <div className="task-item-container">
        <div className="task-title">
          <div className="title">{props.name}</div>
          <span>
            <i className="fas fa-ellipsis-v"></i>
          </span>
        </div>
        {/* <div className="add-task">
          <a href="#" className="add-task" onClick={props.addTaskHandler}>
            <i className="fas fa-plus"></i> <span>Add a task</span>
          </a>
        </div> */}
        <div className="add-task">
          <ToggleForm
            classOverride="add-new-list-override"
            inputPlaceHolder="Enter task name"
            actionLabel="Add a task"
            submitHandler={props.addTaskHandler}
          />
        </div>
        {props.taskList &&
          props.taskList.map((task, index) => {
            if (task.status) {
              return (
                <div key={index} className="task-list-radio">
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
          {props.taskList &&
            props.taskList.map((task, index) => {
              if (!task.status) {
                return (
                  <div key={index} className="task-list-radio">
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
