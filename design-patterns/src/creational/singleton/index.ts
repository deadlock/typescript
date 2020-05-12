import Logger from "./Logger";
import Shopper from "./Shopper";
import Store from "./Store";

Logger.log("starting app...");

new Shopper("alex", 500);
new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750,
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5,
  },
]);

Logger.log("finished config...");

console.log(`${Logger.count} logs total`);
Logger.logs.map((log) => console.log(`   ${log.message}`));
