import Mall from "./Mall";
import Shopper from "./Shopper";

class Store {
  constructor(
    public name: string,
    public subscribers: (Mall | Shopper)[] = []
  ) {}

  sale(discount: number) {
    this.subscribers.forEach((observer) =>
      observer.notify(this.name, discount)
    );
  }

  subscribe(observer: Mall | Shopper) {
    this.subscribers.push(observer);
  }
}

export default Store;
