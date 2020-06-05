import { InventoryInterface, ItemInterface } from "./types";
import Inventory from "./Inventory";
import Item from "./Item";

// Items
const skiGoogles = new Item("ski googles", 5);
const skiHats = new Item("ski hats", 5);
const allMontainSkis = new Item("all mountain skis", 5);
const skiBoots = new Item("ski boots", 5);
const skiPoles = new Item("ski poles", 2);
const skiRack = new Item("ski rack", 1);
const powderSkis: Item = new Item("powder skis", 10);
const wax = new Item("wax", 8);

//Items arrays
const floorItems: Item[] = [];
floorItems.push(skiGoogles);
floorItems.push(skiHats);
floorItems.push(allMontainSkis);
floorItems.push(skiBoots);

const backRoomItems: Item[] = [];
backRoomItems.push(skiGoogles);
backRoomItems.push(skiHats);
backRoomItems.push(skiPoles);
backRoomItems.push(skiRack);

const localStoreItems: Item[] = [];
localStoreItems.push(skiBoots);
localStoreItems.push(skiPoles);
localStoreItems.push(wax);

const warehouseItems: Item[] = [];
warehouseItems.push(skiGoogles);
warehouseItems.push(skiHats);
warehouseItems.push(allMontainSkis);
warehouseItems.push(skiBoots);
warehouseItems.push(skiPoles);
warehouseItems.push(wax);
warehouseItems.push(skiRack);
warehouseItems.push(powderSkis);

export const inventoryFloor: InventoryInterface = new Inventory("floor", floorItems);

export const inventoryBackRoom: InventoryInterface = new Inventory("backroom", backRoomItems);

export const inventoryLocalStore: InventoryInterface = new Inventory(
  "localstore",
  localStoreItems
);

export const inventoryWarehouse: InventoryInterface = new Inventory(
  "warehouse",
  warehouseItems
);
