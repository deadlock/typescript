import Person from './Person'


class PersonBuilder {
  public isEmployee: boolean = false;
  public isManager: boolean = false;
  public hours: number = 0
  public money: number = 0
  public shoppingList: string[] = []

    constructor(public name: string){}

    makeEmployee(){
      this.isEmployee = true;
      return this;
    }

    makeManager(hours: number = 40){
      this.isManager = true;
      this.hours = hours;
      return this;
    }

    makePartTime(){
      this.hours = 20;
      return this;
    }

    withMoney(money: number){
      this.money = money;
      return this;
    }

    withList(list: string[]){
      this.shoppingList = list;
      return this;
    }

    build(){
      return new Person(this);
    }

}

export default PersonBuilder;