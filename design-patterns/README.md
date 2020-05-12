## GOF Design Patterns

### Creational

Creational design patterns have todo with class instantiation, the creation of object instances in our applications.

- #### Singleton

When you want to make sure that one and just one instante of an object exists.

Example:
```
class Logger {
 
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      return (Logger.instance = new Logger());
    }
    return Logger.instance;
  }

}
export default Logger.getInstance();
```

- #### Abstract Factory
- #### Builder

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

- #### Factory Method

Define an interface for creating an object, but let the subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

- #### Prototype

Specify the kinds of objects to create using prototypal instance and create new objects by copying this prototype.

```
```

### Structural

Structural design patterns have todo with the way objectes are composed or put together.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### Behavioral

Behavioral design patterns define how objects interact with one another.

- Chain of responsability
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

## Javascript / Node  Anti-Patterns

Modifying the prototype on an instance
```
person.__proto__.adress = {}
```

Callback hell
```
readFile( ..., () => {
  parseData( ..., () => {
    writeFile( ..., () => {
      logResponse( ..., () => {      
      })
    })
  })
})
```

Syncing execution after initialization
```
listen() {
  fs.readFileSunc( ...)
}
```


