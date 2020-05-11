import Logger from "./Logger";

var logger = Logger.getInstance();

class Shopper {
  public name: string;
  public money: number;

  constructor(name: string, money: number = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${name} has ${money} in their account.`);
  }
}

export default Shopper;
