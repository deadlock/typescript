export interface InventoryInterface {
  name: string;
  items: ItemInterface[];
}

export interface ItemInterface {
  name: string;
  qty: number;
  location?: string,
  deliveryTime?: string
}

export interface StorageInterface {
  name: string
  inventory: InventoryInterface
  deliveryTime: number
  next?: StorageInterface
  setNext: (storage: StorageInterface) => void
  find: (itemName: string) => ItemInterface | undefined
  lookInLocalInventory: (itemName: string) => ItemInterface | undefined
}
