import Person from './Person'

class Shopper extends Person {
    
    public employed:boolean;

    constructor(public name: string, public money:number=0) {
        super(name);
        this.money = money;
        this.employed = false;
    }

}

export default Shopper;
