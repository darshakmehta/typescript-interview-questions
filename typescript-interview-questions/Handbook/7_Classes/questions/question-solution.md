### 1. Class Fields

**Question:**
How do you define and initialize class fields in TypeScript? Provide an example.

**Answer:**
Class fields are defined within the class body and can be initialized directly or in the constructor.

Example:

```typescript
class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point();
console.log(`${pt.x}, ${pt.y}`); // Prints 0, 0
```

In this example, x and y are class fields initialized in the constructor.

### 2. Readonly Fields

**Question:**
What are readonly fields in TypeScript, and how do they differ from regular fields? Provide an example.

**Answer:**
readonly fields cannot be reassigned after their initial assignment. They can only be assigned in the constructor.

Example:

```typescript
class Greeter {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
}

const g = new Greeter();
g.name = 'also not ok'; // Error: Cannot assign to 'name' because it is a read-only property.
```

In this example, name is a readonly field and cannot be reassigned outside the constructor.

### 3. Constructors

**Question:**
How do you define constructors with overloads in TypeScript? Provide an example.

**Answer:**
Constructors can have overloads by defining multiple constructor signatures followed by a single implementation.

Example:

```typescript
class Point {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    if (typeof x === 'string') {
      // Handle string case
    } else {
      this.x = x;
      this.y = y;
    }
  }
}
```

In this example, Point has constructor overloads for different parameter types.

### 4. Methods

**Question:**
How do you define methods in TypeScript classes, and how do they differ from functions? Provide an example.

**Answer:**
Methods are function properties on a class. They can use all the same type annotations as functions and constructors.

Example:

```typescript
class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

In this example, scale is a method that scales the x and y properties by a factor of n.

### 5. Getters and Setters

**Question:**
How do you define getters and setters in TypeScript classes? Provide an example.

**Answer:**
Getters and setters are defined using the get and set keywords.

Example:

```typescript
class C {
  _length = 0;

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}
```

In this example, length is a getter and setter for the \_length property.

### 6. Implements Clauses

**Question:**
How do you use implements clauses in TypeScript classes? Provide an example.

**Answer:**
implements clauses are used to check that a class satisfies a particular interface.

Example:

```typescript
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}

class Ball implements Pingable {
  // Error: Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log('pong!');
  }
}
```

In this example, Sonar correctly implements the Pingable interface, while Ball does not.

### 7. Extends Clauses

**Question:**
How do you use extends clauses in TypeScript classes? Provide an example.

**Answer:**
extends clauses are used to create a derived class that inherits properties and methods from a base class.

Example:

```typescript
class Animal {
  move() {
    console.log('Moving along!');
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const d = new Dog();
d.move(); // Base class method
d.woof(3); // Derived class method
```

In this example, Dog extends Animal and inherits its move method.

### 8. Abstract Classes and Members

**Question:**
What are abstract classes and members in TypeScript, and how are they used? Provide an example.

**Answer:**
Abstract classes and members are used to define base classes that cannot be instantiated directly. Abstract members must be implemented in derived classes.

Example:

```typescript
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log('Hello, ' + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return 'world';
  }
}

const d = new Derived();
d.printName(); // Prints "Hello, world"
```

In this example, Base is an abstract class with an abstract method getName, which is implemented in the derived class Derived.

### 9. Static Members

**Question:**
How do you define and use static members in TypeScript classes? Provide an example.

**Answer:**
Static members are defined using the static keyword and are accessed through the class constructor object itself.

Example:

```typescript
class MyClass {
  static x = 0;

  static printX() {
    console.log(MyClass.x);
  }
}

console.log(MyClass.x); // Access static member
MyClass.printX(); // Call static method
```

In this example, x and printX are static members of MyClass.

### 10. Parameter Properties

**Question:**
What are parameter properties in TypeScript, and how are they used? Provide an example.

**Answer:**
Parameter properties are a shorthand for defining and initializing class properties directly in the constructor parameters using visibility modifiers.

Example:

```typescript
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {}
}

const a = new Params(1, 2, 3);
console.log(a.x); // Access public property
console.log(a.z); // Error: Property 'z' is private and only accessible within class 'Params'.
```

In this example, x, y, and z are parameter properties defined and initialized in the constructor.
