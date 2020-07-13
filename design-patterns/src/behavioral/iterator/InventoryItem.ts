import { InventoryInterface } from "../chain-of-responsability/types";

export interface InventoryItemInterface {
    name: string,
    price: number,
    writeLn: () => void
}

class InventoryItem implements InventoryItemInterface {
  constructor(public name: string, public price: number) {}

  writeLn() {
    process.stdout.write(`${this.name}: $${this.price}`);
  }
}

export default InventoryItem;
