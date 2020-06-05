import { ItemInterface } from "./types";

class Item implements ItemInterface {
  constructor(public name: string, public qty: number) {}
}

export default Item;
