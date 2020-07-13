import ObserverInterface from "./types";

class Shopper implements ObserverInterface {
  constructor(public name: string) {}

  notify(storeName: string, discount: number) {
    console.log(
      `${this.name}, there is a sale at ${storeName}! ${discount}% off everything!`
    );
  }
}

export default Shopper;
