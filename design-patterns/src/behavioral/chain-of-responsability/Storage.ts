import { InventoryInterface, ItemInterface, StorageInterface } from "./types";


class Storage implements StorageInterface {
  constructor(
    public name: string,
    public inventory: InventoryInterface,
    public deliveryTime: number,
    public next?: StorageInterface
  ) {}

  lookInLocalInventory(itemName: string) {
    return this.inventory.items.find(
      (item: ItemInterface) => item.name === itemName
    );
  }

  find(itemName: string) {
    let itemStoredLocally = this.lookInLocalInventory(itemName);
    if (itemStoredLocally) {
      return {
        ...itemStoredLocally,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? "now" : `${this.deliveryTime} day(s)`,
      };
    } else {
      const item: ItemInterface | undefined = this.next?.find(itemName);
      return item
    }
  }

  setNext(nextStorage: StorageInterface) {
    this.next = nextStorage;
  }
}

export default Storage;
