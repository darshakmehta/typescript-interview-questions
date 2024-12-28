# Dependency Injection (DI)

Dependency Injection (DI) is a design principle where an object's dependencies are provided from the outside rather than being created inside the object itself. Factories simplify this process by acting as central creators or providers for the dependencies an object needs.

## How Factories Help with Dependency Injection

**Problem Without DI**: Imagine a class that creates its own dependencies internally. This makes it harder to replace those dependencies for testing or reuse the class with different configurations.

**Solution with Factories**: Factories can be used to provide these dependencies at runtime, allowing the class to stay flexible and decoupled from specific implementations.

Dependency Injection (DI) is a design principle where an object's dependencies are provided from the outside rather than being created inside the object itself. Factories simplify this process by acting as central creators or providers for the dependencies an object needs.

## Simple Example

Let’s say you have a `Car` class that depends on an `Engine` class.

### Without Dependency Injection:

The `Car` creates its own `Engine`, making it rigid and hard to test:

```ts
class Engine {
  constructor(public type: string) {}
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine('V8'); // Hardcoded dependency
  }
}
```

You cannot easily replace the Engine with a different implementation for testing or reuse.

### With Dependency Injection via a Factory:

A factory creates the `Engine`, and the `Car` receives it as a dependency:

```ts
class Engine {
  constructor(public type: string) {}
}

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine; // Dependency is injected
  }
}

function engineFactory(type: string): Engine {
  return new Engine(type);
}

// Inject dependencies
const engine = engineFactory('V8');
const car = new Car(engine);
```

The `engineFactory` makes it easy to change how the `Engine` is created (e.g., based on runtime conditions).
For testing, you can pass a mock or a stub for the `Engine` instead of creating a real one.

## Benefits of Using Factories for DI

1. Modularity:

> The Car class no longer depends on a specific Engine implementation. The creation logic is isolated in the factory.

2. Testability:

> You can test the Car class with different Engine instances (e.g., mock or stub engines).

3. Flexibility:

> The engineFactory can create different types of engines dynamically, making the Car adaptable to various scenarios.

In simple terms, factories help objects stay focused on their primary purpose (like driving in the Car example) by delegating the creation of their dependencies to an external source. This makes your code easier to test, maintain, and extend.
