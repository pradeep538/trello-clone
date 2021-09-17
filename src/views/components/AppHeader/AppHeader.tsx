import Board from "../../../entities";

export type Tprops = {
  boards: Board[];
  selectedOption: string;
  addBoardHandler: (event: any) => void;
  boardInputHandler: (event: any) => void;
  board: string;
  handleSelectedOption: (selectedData: any) => void;
};
const AppHeader = (props: Tprops) => {
  console.log(props);
  return (
    <div className="app-header">
      <div>
        <label>Select board</label>
        <select
          name="board"
          className="select-board"
          id="board-selected"
          value={props.selectedOption || "Select board"}
          onChange={(event: any) => {
            let selected = event.target.value;
            let selectedData = {
              boardId: selected.split("-")[0],
              taskName: selected.split("-")[1],
            };
            props.handleSelectedOption(selectedData);
          }}
        >
          {!props.selectedOption && (
            <option value="Select board">Select board</option>
          )}
          {props.boards.map((board: Board, index) => {
            return (
              <option key={index} value={index + "-" + board.name}>
                {board.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="create-board-container">
        <form
          action=""
          name="create-board"
          onSubmit={(event: any) => {
            props.addBoardHandler(event);
          }}
        >
          <input
            type="text"
            className="create-board-input"
            id="create-board-input"
            placeholder="Enter board name"
            value={props.board}
            onChange={props.boardInputHandler}
            required
          />
          <button type="submit" className="create-board">
            <i className="fas fa-plus"> </i> Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppHeader;
