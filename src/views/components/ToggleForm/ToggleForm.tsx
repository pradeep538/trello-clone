import { useState } from "react";
import classNames from "classnames";
export type TProps = {
  actionLabel: string;
  inputPlaceHolder: string;
  submitHandler: (input: string) => void;
  classOverride: string;
};
const ToggleForm = (props: TProps) => {
  const [input, setInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const clearInputAndToggle = () => {
    setInput("");
    setShowForm(false);
  };
  const { classOverride } = props;
  const className = classNames(
    "task-list-item",
    "create-task-list",
    "add-new-list",
    { [classOverride]: true },
    { "new-list-active": showForm }
  );

  return (
    <div className={className}>
      {!showForm && (
        <a
          className="anchor-decoration"
          onClick={(event: any) => {
            setShowForm(true);
          }}
        >
          <i className="fas fa-plus"></i> <span>{props.actionLabel}</span>
        </a>
      )}
      {showForm && (
        <div className="new-list-form">
          <input
            type="text"
            value={input}
            onChange={(event: any) => setInput(event.target.value)}
            className="create-board-input"
            id="create-board-input"
            placeholder={props.inputPlaceHolder}
            required
          />
          <div className="new-list-form-action">
            <button
              type="button"
              className="create-board"
              onClick={() => {
                if (input) {
                  props.submitHandler(input);
                  clearInputAndToggle();
                }
              }}
            >
              <i className="fas fa-plus"> </i> Create
            </button>
            <button
              type="button"
              className="create-board"
              onClick={clearInputAndToggle}
            >
              <i className="fas fa-times"> </i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleForm;
