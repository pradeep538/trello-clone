import { Tstate } from "../../redux/reducers";

export const addBoard = (state: Tstate, data: any) => {
  let { boards } = state;
  boards.push(data);
  return { ...state };
};
