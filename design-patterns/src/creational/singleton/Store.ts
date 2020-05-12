import Logger from './Logger'

interface Inventory {
    item: string;
    qty: number;
    price: number;
}

class Store {
    public name: string;
    public inventory: Inventory[] = []

    constructor(name: string, inventory: Inventory[]) {
        this.name = name;
        this.inventory = inventory;
        Logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }

}

export default Store;
