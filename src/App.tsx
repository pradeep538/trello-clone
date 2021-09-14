import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-header">
          <div>
            <label>Select board</label>
            <select name="board" className="select-board" id="board-selected">
              <option value="sample 1">Sample 1</option>
              <option value="sample 2">Sample 2</option>
              <option value="sample 3">Sample 3</option>
              <option value="sample 4">Sample 4</option>
              <option value="sample 5">Sample 5</option>
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
        <div className="task-list-container">
          <div className="task-list-item task-created">
            <div className="task-item-container">
              <div className="task-title">
                <div className="title">Primary Task</div>
                <span>
                  <i className="fas fa-ellipsis-v"></i>
                </span>
              </div>
              <div className="add-task">
                <a href="#" className="add-task">
                  <i className="fas fa-plus"></i> <span>Add a task</span>
                </a>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="completed-list">
                <div>
                  <label>Completed</label>(<span>3</span>)
                </div>
                <div className="task-list-radio">
                  <span className="task-circle">
                    <i className="fas fa-check"></i>
                  </span>
                  <div className="task-completed">
                    Can you do better than this?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="task-list-item task-created">
            <div className="task-item-container">
              <div className="task-title">
                <div className="title">Primary Task</div>
                <span>
                  <i className="fas fa-ellipsis-v"></i>
                </span>
              </div>
              <div className="add-task">
                <a href="#" className="add-task anchor-decoration">
                  <i className="fas fa-plus"></i> <span>Add a task</span>
                </a>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="completed-list">
                <div>
                  <label>Completed</label>(<span>3</span>)
                </div>
                <div className="task-list-radio">
                  <span className="task-circle">
                    <i className="fas fa-check"></i>
                  </span>
                  <div className="task-completed">
                    Can you do better than this?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="task-list-item create-task-list add-new-list new-list-active">
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

      {/* Modal starts from here */}
      <div className="modal ">
        <div className="modal-content">
          <div className="modal-header">
            <div className="delete-task">
              <i className="fas fa-trash"></i>
            </div>
            <a href="#" className="anchor-decoration">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <div className=" task-created">
            <div className="task-item-container">
              <div className="task-title">
                <div className="title">Primary Task</div>
                <span>
                  <i className="fas fa-ellipsis-v"></i>
                </span>
              </div>
              <div className="add-task">
                <a href="#" className="add-task anchor-decoration">
                  <i className="fas fa-plus"></i> <span>Add a task</span>
                </a>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="task-list-radio">
                <span className="task-circle">
                  <i className="far fa-circle"></i>
                </span>
                <div className="task">Can you do better than this?</div>
              </div>
              <div className="completed-list">
                <div>
                  <label>Completed</label>(<span>3</span>)
                </div>
                <div className="task-list-radio">
                  <span className="task-circle">
                    <i className="fas fa-check"></i>
                  </span>
                  <div className="task-completed">
                    Can you do better than this?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
