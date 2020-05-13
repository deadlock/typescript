## GOF Design Patterns

### Creational

Creational design patterns have todo with class instantiation, the creation of object instances in our applications.

- #### Singleton

When you want to make sure that one and just one instante of an object exists.

- #### Abstract Factory


- #### Builder

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

- #### Factory Method

Define an interface for creating an object, but let the subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

- #### Prototype

Specify the kinds of objects to create using prototypal instance and create new objects by copying this prototype.

### Structural

Structural design patterns have todo with the way objectes are composed or put together.

- #### Adapter

Convert the interface of a class into another clients expect. Adapter lets classes work together that couldn't otherwise beacuse on incompatible interfaces.

- #### Proxy

Provide a surrogate or placeholder for another object control access to it.

- #### Composite

Compose objects into tree structures to represent part-whole hierarchies. Composite lets clientes treat individual objects and compositions of objects uniformly

- #### Decorator

Attach additional responsabilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

- #### Bridge
- #### Facade
- #### Flyweight


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


