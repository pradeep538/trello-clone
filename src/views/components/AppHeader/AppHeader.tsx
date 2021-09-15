export type Tprops = {
  selectOptions: string[];
  selectedOption: string;
};
const AppHeader = (props: Tprops) => {
  return (
    <div className="app-header">
      <div>
        <label>Select board</label>
        <select
          name="board"
          className="select-board"
          id="board-selected"
          value={props.selectedOption || "Select board"}
        >
          {!props.selectedOption && (
            <option value="Select board">Select board</option>
          )}
          {props.selectOptions.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </div>
      <div className="create-board-container">
        <form action="" name="create-board">
          <input
            type="text"
            className="create-board-input"
            id="create-board-input"
            placeholder="Enter board name"
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
