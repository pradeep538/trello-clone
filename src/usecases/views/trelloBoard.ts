import { addBoard, selectedBoard } from "../../redux/actions/index";
import storeInstance from "../../redux/store";
import useCaseInstance from "..";
export const addBoardData = (data: any) => {
  let addBoardResponse = useCaseInstance.apiInstance.addBoard(data);
  console.log(addBoardResponse);
  addBoardResponse
    .then((response: any) => {
      if (response.status === 201) {
        storeInstance.dispatch(addBoard(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });
  return addBoardResponse;
};
export const selectedBoardData = (data: string) => {
  storeInstance.dispatch(selectedBoard(data));
};
