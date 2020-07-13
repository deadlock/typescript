import InventoryItemInterface from "./InventoryItem";

class Iterator {
  public index: number;

  constructor(public items: InventoryItemInterface[] = []) {
    this.index = 0;
  }

  next() {
    if (this.hasNext()) {
      this.index++;
    }
    return this.current();
  }

  prev() {
    if (this.index !== 0) {
      this.index--;
    }
    return this.current();
  }

  last() {
    const [first] = [...this.items].reverse();
    return first;
  }

  first() {
    const [first] = this.items;
    return first;
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  current() {
    return this.items[this.index];
  }
}

export default Iterator;
