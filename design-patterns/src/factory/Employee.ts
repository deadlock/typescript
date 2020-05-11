import Shopper from "./Shopper";

class Employee extends Shopper {
  public employer: string;
  constructor(name: string, money: number = 0, employer = "") {
    super(name, money);
    this.employer = employer;
    this.employed = true;
  }

  payDay(money = 0) {
    this.money += money;
  }
}

export default Employee;
