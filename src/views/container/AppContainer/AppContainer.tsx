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
import { addNewTaskListData } from "../../../usecases/views/newTask";
import { getSelectedBoardIndex } from "../../../utils/helpers";
interface Props {
  storeData: {
    boards: Board[];
    selectedBoard: string;
  };
}
const AppContainer = (props: Props) => {
  const [board, setBoard] = useState("");
  const [currentBoard, setCurrentBoard] = useState<Board>();
  const { storeData } = props;
  const { selectedBoard, boards } = storeData;
  useEffect(() => {
    console.log("BOARD DATA===<", props);
    let selectedBoardIndex = getSelectedBoardIndex(selectedBoard, boards);
    setCurrentBoard(boards[selectedBoardIndex]);
  }, [props, board]);

  const addTaskHandler = (input: string) => {
    console.log("ADD TASK HANDLER==>", input);
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
    console.log(inputData);
    let addNewTaskListResponse = addNewTaskListData(inputData);
    addNewTaskListResponse.then((res: any) => {
      if (res.status === 201) {
      }
    });
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
          currentBoard.list.map((taskListItem, index) => {
            return (
              <TaskListItem
                key={taskListItem.name}
                name={taskListItem.name}
                taskList={taskListItem.tasks}
                addTaskHandler={addTaskHandler}
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
