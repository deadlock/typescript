
interface Clonable {
    clone: () => void;
  }
  
class ShopperP implements Clonable {
    private _name: string;
    private _shoppingList: string[]

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item: string) {
        this._shoppingList.push(item);
    }

    clone() {
        let proto = Object.getPrototypeOf(this);
        let cloned = Object.create(proto);
        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList]
        return cloned;
    }

}

export default ShopperP;
