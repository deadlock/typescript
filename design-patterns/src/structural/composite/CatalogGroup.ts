import CatalogInterface from "./CatalogInterface";

class CatalogGroup implements CatalogInterface {
  constructor(
    public name: string,
    private composites: CatalogInterface[] = []
  ) {}

  get total() {
    return this.composites.reduce(
      (total, nextItem) => total + nextItem.total,
      0
    );
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    this.composites.forEach((item) => item.print());
  }
}
export default CatalogGroup;
