import Store from "./Store";

const skiShop = new Store("Steep and Deep");
const results = skiShop.find('powder skis');

console.log(results);
