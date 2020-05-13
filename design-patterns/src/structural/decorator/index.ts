import Shopper from './Shopper'
import {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} from './InventoryItem';

const alex = new Shopper('Alex', 5000);

const walkman = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

const goldNecklace = new GoldenInventoryItem(necklace);
console.log(goldNecklace.price);
const diamondGoldNecklace = new DiamondInventoryItem(goldNecklace);
console.log(diamondGoldNecklace.price);
const diamondWalkman = new DiamondInventoryItem(walkman);

alex.purchase(necklace);
alex.purchase(walkman);
alex.purchase(goldNecklace)
alex.purchase(diamondWalkman);
alex.purchase(diamondGoldNecklace);
alex.printStatus();
