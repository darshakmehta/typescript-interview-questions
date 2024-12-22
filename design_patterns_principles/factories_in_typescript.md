# Factory Design Pattern in TypeScript

In TypeScript, factories are design patterns or utility functions that create and return new objects or instances of classes. They provide a layer of abstraction for object creation, allowing developers to centralize and control the instantiation logic. Factories can make code more flexible, reusable, and testable by decoupling the instantiation process from the rest of the codebase.

## Types of Factories

1. Simple Factory Function: A function that creates and returns an instance of a class or object.

```
class Car {
  constructor(public model: string) {}
}

function createCar(model: string): Car {
  return new Car(model);
}

const myCar = createCar("Tesla");
console.log(myCar.model); // Output: Tesla
```

2. Generic Factory: Uses generics to create instances of different types dynamically.

```
const factory = <T extends unknown>(cls: { new (...args: any[]): T }, ...args: any[]): T => {
  return new cls(...args);
}

class Bike {
  constructor(public brand: string) {}
}

const bike = factory(Bike, "Yamaha");
console.log(bike.brand); // Output: Yamaha
```

3. Abstract Factory Pattern: A design pattern used to create families of related objects without specifying their concrete classes.

```
interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() {
    console.log("Driving a car!");
  }
}

class Bike implements Vehicle {
  drive() {
    console.log("Riding a bike!");
  }
}

const vehicleFactory = (type: string): Vehicle => {
  if (type === "car") return new Car();
  if (type === "bike") return new Bike();
  throw new Error("Unknown vehicle type");
}

const myVehicle = vehicleFactory("car");
myVehicle.drive(); // Output: Driving a car!
```

## Benefits of Factories in TypeScript

a. Abstraction:

Users of the factory do not need to know the details of how the object is created.

b. Code Reusability:

The factory centralizes object creation, reducing duplication.

c. Flexibility:

Factories make it easier to introduce new types or change instantiation logic without impacting other parts of the code.

d. Dependency Injection:

Factories simplify injecting dependencies into objects, improving modularity and testability.

## When to Use Factories

a. Dynamic Object Creation: When the type of object to be created depends on runtime logic.
b. Complex Instantiation: When creating an object involves complex logic or dependencies.
c. Abstraction: When you want to hide the details of object creation from the client code.
