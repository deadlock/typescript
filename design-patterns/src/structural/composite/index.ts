import CatalogItem from "./CatalogItem";
import CatalogGroup from "./CatalogGroup";

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California work boots", 19.99);

const another_group = new CatalogGroup('Another Catalog', [boots, flipFlops])

const group_shoes = new CatalogGroup("Shoes and Such", [
  boots,
  sneakers,
  flipFlops,
  another_group
]);

//console.log("boots total: ", `$${boots.total}`);
console.log("shoes total: ", `$${group_shoes.total}`);

//boots.print();
//sneakers.print();
group_shoes.print();
