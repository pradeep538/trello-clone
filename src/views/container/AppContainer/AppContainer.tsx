import AppHeader from "../../components/AppHeader/AppHeader";
import { connect } from "react-redux";
import Board from "../../../entities";
import TaskListItem from "../../components/TaskListItem/TaskListItem";
import { useEffect, useState } from "react";
import {
  addBoardData,
  selectedBoardData,
} from "../../../usecases/views/trelloBoard";
import ToggleForm from "../../components/ToggleForm/ToggleForm";
import {
  addNewTaskListData,
  addTaskToListData,
  toggleTaskStatus,
  updateDragAndDropData,
} from "../../../usecases/views/newTask";
import { getSelectedBoardIndex } from "../../../utils/helpers";
import List from "../../../entities/List";
import {
  TAddNewTask,
  TDragAndDropMetadata,
  TToggleTaskStatus,
} from "../../../utils/types";
interface Props {
  storeData: {
    boards: Board[];
    selectedBoard: string;
  };
}
const AppContainer = (props: Props) => {
  const [board, setBoard] = useState("");
  const [currentBoard, setCurrentBoard] = useState<any>();
  const { storeData } = props;
  const { selectedBoard, boards } = storeData;
  useEffect(() => {
    if (boards.length) {
      let selectedBoardIndex = getSelectedBoardIndex(selectedBoard, boards);
      setCurrentBoard({ ...boards[selectedBoardIndex] });
    }
  }, [props.storeData, board]);

  const addTaskHandler = (newTaskData: any) => {
    let newTask: TAddNewTask = {
      selectedBoard: selectedBoard,
      ...newTaskData,
    };
    addTaskToListData(newTask);
  };
  const addBoardHandler = async (event: any) => {
    event.preventDefault();
    let response = await addBoardData(board);
    if (response.status === 201) {
      setBoard("");
    }
  };
  const handleSelectedOption = (selectedData: any) => {
    selectedBoardData(selectedData);
  };
  const addNewListHandler = (inputData: string) => {
    let addNewTaskListResponse = addNewTaskListData(inputData);
    addNewTaskListResponse.then((res: any) => {
      if (res.status === 201) {
      }
    });
  };
  const toggleTaskStatusHandler = (toggleTask: any) => {
    let toggleTaskData: TToggleTaskStatus = {
      selectedBoard: selectedBoard,
      ...toggleTask,
    };
    toggleTaskStatus(toggleTaskData);
  };
  const updateTaskPosition = (
    fromMetadata: TDragAndDropMetadata,
    toMetadata: TDragAndDropMetadata
  ) => {
    console.log("DROPPED==>", selectedBoard, fromMetadata, toMetadata);
    updateDragAndDropData(selectedBoard, fromMetadata, toMetadata);
  };
  return (
    <div className="container">
      <AppHeader
        selectedOption={storeData.selectedBoard}
        boards={storeData.boards}
        boardInputHandler={(event: any) => {
          setBoard(event.target.value);
        }}
        board={board}
        addBoardHandler={addBoardHandler}
        handleSelectedOption={handleSelectedOption}
      />

      <div className="task-list-container">
        {currentBoard &&
          currentBoard.list &&
          currentBoard.list.map((taskListItem: List, index: number) => {
            return (
              <TaskListItem
                key={taskListItem.name}
                name={taskListItem.name}
                taskList={taskListItem.tasks}
                addTaskHandler={addTaskHandler}
                taskListId={index}
                toggleTaskStatus={(task: any) => {
                  let taskData = { ...task, taskListId: index };
                  toggleTaskStatusHandler(taskData);
                }}
                updateTaskPosition={updateTaskPosition}
              />
            );
          })}

        {storeData.selectedBoard && (
          <ToggleForm
            classOverride=""
            inputPlaceHolder="Enter List name"
            actionLabel="Add new list"
            submitHandler={addNewListHandler}
          />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    storeData: state.trelloReducer,
  };
};
export default connect(mapStateToProps)(AppContainer);
