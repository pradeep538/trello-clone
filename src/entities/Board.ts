import List from "./List";

class Board {
  name: string;
  list!: List[];
  constructor(name: string) {
    this.name = name;
    this.list = [];
  }
  setName(name: string) {
    this.name = name;
  }
}
export default Board;
