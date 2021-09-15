import Board from "../../entities/Board";
import { addBoard } from "../../usecases/reduce/reduceTrello";
import * as Actions from "../actions/types";

export type Tstate = {
  boards: Board[];
};
const initialState: Tstate = {
  boards: [],
};
export default function trelloReducer(
  state: Tstate = initialState,
  action: any
) {
  switch (action.type) {
    case Actions.ADD_BOARD:
      return { ...addBoard(state, action.payload) };
    case Actions.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}
