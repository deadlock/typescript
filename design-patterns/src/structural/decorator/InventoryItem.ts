import ItemInterface from "./ItemInterface";

export class InventoryItem implements ItemInterface {
  constructor(public name: string, public price: number) {}

  print() {
    console.log(`${this.name} costs ${this.price}`);
  }
}

export class GoldenInventoryItem implements ItemInterface {

  public name: string;
  public price: number = 1000;

  constructor(baseItem: ItemInterface) {
    this.name = `Golden ${baseItem.name}`;
    this.price += baseItem.price;
  }

}

export class DiamondInventoryItem implements ItemInterface {

  public name: string;
  public price: number = 1000;
  public cutsGlass: boolean = true;

  constructor(baseItem: ItemInterface) {
    this.name = `Diamond ${baseItem.name}`;
    this.price += baseItem.price;
  }

  print(){
      console.log(`${this.name} costs a lot of money...`);
      
  }
  
}
