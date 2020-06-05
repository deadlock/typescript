import { InventoryInterface } from "./types";
import Item from "./Item";

class Inventory implements InventoryInterface {
  constructor(public name: string, public items: Item[]) {}
}

export default Inventory;
