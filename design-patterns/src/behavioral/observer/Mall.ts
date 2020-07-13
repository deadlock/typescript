import ObserverInterface from './types'

export interface Sales {
  storeName: string;
  discount: number;
}

class Mall implements ObserverInterface {
  constructor(public sales: Sales[] = []) {}

  notify(storeName: string, discount: number) {
    console.log(this.sales.push({ storeName, discount }));
  }
}

export default Mall;
