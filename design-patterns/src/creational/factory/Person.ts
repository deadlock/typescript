class Person {

    constructor(public name:string ='unnamed person')  {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }

}

export default Person;
