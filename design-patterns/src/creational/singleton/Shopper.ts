import Logger from "./Logger";

class Shopper {
  public name: string;
  public money: number;

  constructor(name: string, money: number = 0) {
    this.name = name;
    this.money = money;
    Logger.log(`New Shopper: ${name} has ${money} in their account.`);
  }
}

export default Shopper;
