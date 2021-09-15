export default {
  createBoard: (id: string) => `create-board-${id}`,
};
export const setTestId = (testId: string) => ({
  "data-testid": testId,
});
