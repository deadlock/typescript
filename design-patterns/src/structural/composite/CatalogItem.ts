import CatalogInterface from "./CatalogInterface";

class CatalogItem implements CatalogInterface {
  constructor(public name: string, private price: number) {}

  get total() {
    return this.price;
  }

  print() {
    console.log(`${this.name} $${this.price} `);
  }
}

export default CatalogItem;
