import * as Actions from "../actions/types";
export const addBoard = (data: any) => ({
  type: Actions.ADD_BOARD,
  payload: data,
});
