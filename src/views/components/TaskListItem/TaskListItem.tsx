import React from "react";
import Task from "../../../entities/Task";
import { TDragAndDropMetadata } from "../../../utils/types";
import ToggleForm from "../ToggleForm/ToggleForm";

export type TProps = {
  name: string;
  addTaskHandler: (taskData: any) => void;
  taskList?: Task[];
  taskListId: number;
  toggleTaskStatus: (taskStatus: any) => void;
  updateTaskPosition: (
    fromMetadata: TDragAndDropMetadata,
    toMetadata: TDragAndDropMetadata
  ) => void;
};
const TaskListItem = (props: TProps) => {
  const completedCount =
    (props.taskList && props.taskList.filter((item) => !item.status)) || [];

  const onDropHandler = (event: any, toDropMetadata: TDragAndDropMetadata) => {
    event.preventDefault();
    let incomingData = event.dataTransfer.getData("text");
    let [taskListMetadata, taskMetadata] = incomingData.split("_");
    let fromMetadata: TDragAndDropMetadata = {
      taskListId: parseInt(taskListMetadata.split("-")[1]),
      taskID: parseInt(taskMetadata.split("-")[1]),
    };
    props.updateTaskPosition(fromMetadata, toDropMetadata);
  };
  const onDragStartHandler = (event: any, index: number) => {
    let transferData = `taskListId-${props.taskListId}_taskId-${index}`;
    event.dataTransfer.setData("text/plain", transferData);
  };
  return (
    <div className="task-list-item task-created" draggable="true">
      <div className="task-item-container">
        <div className="task-title">
          <div className="title">{props.name}</div>
          <span>
            <i className="fas fa-ellipsis-v"></i>
          </span>
        </div>

        <div className="add-task">
          <ToggleForm
            classOverride="add-new-list-override"
            inputPlaceHolder="Enter task name"
            actionLabel="Add a task"
            submitHandler={(input: string) => {
              let task = {
                taskName: input,
                taskListId: props.taskListId,
              };
              props.addTaskHandler(task);
            }}
          />
        </div>
        {props.taskList &&
          props.taskList.map((task, index) => {
            return (
              task.status && (
                <div
                  key={task.title}
                  className="task-list-radio"
                  draggable="true"
                  onDragStart={(event: any) => {
                    onDragStartHandler(event, index);
                  }}
                  onDrop={(event: any) => {
                    onDropHandler(event, {
                      taskListId: props.taskListId,
                      taskID: index,
                    });
                  }}
                  /* onDragEnter={(event: any) => {
                    event.preventDefault();
                  }} */
                  onDragOver={(event: any) => {
                    event.preventDefault();
                  }}
                >
                  <span
                    className="task-circle"
                    onClick={() => {
                      let task = { taskID: index };
                      props.toggleTaskStatus(task);
                    }}
                  >
                    <i className="far fa-circle"></i>
                  </span>
                  <div className="task">{task.title}</div>
                </div>
              )
            );
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
                    <span
                      className="task-circle"
                      onClick={() => {
                        let task = { taskID: index };
                        props.toggleTaskStatus(task);
                      }}
                    >
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
