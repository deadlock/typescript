import { StorageInterface } from "./types";
import Storage from "./Storage";
import {
  inventoryBackRoom,
  inventoryFloor,
  inventoryLocalStore,
  inventoryWarehouse,
} from "./Inventories";

class Store {
  public storage: StorageInterface;
  
  constructor(public name: string) {
    const floorStorage = new Storage("store floor", inventoryFloor, 0);
    const backroom = new Storage("store backroom", inventoryBackRoom, 0);
    const localStorage = new Storage("nearby store", inventoryLocalStore, 1);
    const warehouse = new Storage("warehouse", inventoryWarehouse, 5);

    floorStorage.setNext(backroom);
    backroom.setNext(localStorage);
    localStorage.setNext(warehouse);

    this.storage = floorStorage;
  }

  find(itemName: string) {
    return this.storage.find(itemName);
  }
}

export default Store;
