import AppHeader from "../../components/AppHeader/AppHeader";
import { connect } from "react-redux";
import Board from "../../../entities";
import TaskListItem from "../../components/TaskListItem/TaskListItem";
interface Props {
  trelloData: {
    boards: Board[];
  };
}
const AppContainer = (props: Props) => {
  const taskList = {
    name: "Sample board 4 ",
    list: [
      {
        name: "Sample list 1",
        tasks: [
          { title: "Sample task 1", status: true, label: [] },
          { title: "Sample task 2", status: true, label: [] },
          { title: "Sample task 3", status: true, label: [] },
          { title: "Sample task 4", status: false, label: [] },
        ],
      },
    ],
  };
  const taskList2 = {
    name: "Sample board 4 ",
    list: [
      {
        name: "Sample list 1",
        tasks: [
          { title: "Sample task 1", status: true, label: [] },
          { title: "Sample task 2", status: false, label: [] },
          { title: "Sample task 3", status: false, label: [] },
          { title: "Sample task 4", status: false, label: [] },
        ],
      },
    ],
  };
  const addTaskHandler = (event: any) => {};
  return (
    <div className="container">
      <AppHeader
        selectedOption=""
        selectOptions={["Sample 1", "Sample 2", "Sample 3"]}
      />

      <div className="task-list-container">
        {taskList.list.map((taskListItem, index) => {
          return (
            <TaskListItem
              key={index}
              name={taskListItem.name}
              taskList={taskListItem.tasks}
              addTaskHandler={addTaskHandler}
            />
          );
        })}
        {taskList2.list.map((taskListItem, index) => {
          return (
            <TaskListItem
              key={index}
              name={taskListItem.name}
              taskList={taskListItem.tasks}
              addTaskHandler={addTaskHandler}
            />
          );
        })}

        <div className="task-list-item create-task-list add-new-list ">
          <a href="#" className="anchor-decoration">
            <i className="fas fa-plus"></i> <span>Add new list</span>
          </a>
          <div className="new-list-form">
            <input
              type="text"
              className="create-board-input"
              id="create-board-input"
              placeholder="Enter board name"
              required
            />
            <div className="new-list-form-action">
              <button type="button" className="create-board">
                <i className="fas fa-plus"> </i> Create
              </button>
              <button type="button" className="create-board">
                <i className="fas fa-times"> </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  trelloData: state.boards,
});
export default connect(mapStateToProps)(AppContainer);
