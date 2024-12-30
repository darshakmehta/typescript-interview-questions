# Question 1: What is TypeScript?

## Solution

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing, classes, and interfaces to JavaScript, enabling developers to catch errors early during development and improve code quality and maintainability.

### Key Features of TypeScript:

- **Static Typing**: TypeScript allows you to define types for variables, function parameters, and return values, which helps catch type-related errors at compile time.
- **Interfaces**: TypeScript provides interfaces to define the shape of objects, ensuring that objects adhere to specific structures.
- **Classes**: TypeScript supports object-oriented programming with classes, inheritance, and access modifiers.
- **Modules**: TypeScript supports modular programming, allowing you to organize code into reusable modules.
- **Tooling**: TypeScript integrates well with modern development tools and editors, providing features like autocompletion, refactoring, and navigation.

### Example:

```ts
// TypeScript code example
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person('Alice', 30);
person.greet();
```

In this example, we define a `Person` class with `name` and `age` properties, a constructor to initialize these properties, and a `greet` method to print a greeting message. The TypeScript compiler will check for type correctness and generate the corresponding JavaScript code.

### Benefits of Using TypeScript:

- **Early Error Detection**: TypeScript catches type-related errors during development, reducing runtime errors.
- **Improved Code Quality**: With static typing and interfaces, TypeScript enforces better coding practices and helps maintain consistent code.
- **Enhanced Tooling**: TypeScript's integration with development tools improves the developer experience with features like code completion and refactoring.
- **Scalability**: TypeScript's features make it easier to manage and scale large codebases.

Overall, TypeScript enhances JavaScript by adding powerful features that improve developer productivity and code quality.

### 2. Type Inference and Type Annotations

**Question:**
Given the following TypeScript code, what will be the inferred types of `a`, `b`, and `c`? Explain why.

```ts
let a = 10;
let b = 'hello';
let c = true;
```

**Answer:**

a will be inferred as `number`.

b will be inferred as `string`.

c will be inferred as `boolean`.

TypeScript infers the types based on the initial values assigned to the variables.

### 3. Function Overloads

**Question:** Write a function `add` that can take either two numbers or two strings and returns their sum or concatenation respectively. Use function overloads to achieve this.

**Answer:**

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

// Example usage:
const sum = add(1, 2); // 3
const concatenation = add('hello', 'world'); // "helloworld"
```

### 4. Union Types and Type Guards

**Question:** Write a function `printId` that takes a parameter `id` which can be either a string or a number. The function should print the length of the string if `id` is a string, and the number itself if `id` is a number.

**Answer:**

```ts
function printId(id: string | number): void {
  if (typeof id === 'string') {
    console.log(id.length);
  } else {
    console.log(id);
  }
}

// Example usage:
printId('hello'); // 5
printId(123); // 123
```

### 5. Intersection Types

**Question:** Create an intersection type `Person` that combines the properties of `Name` and `Age` interfaces. Then, create a variable of type `Person`.

**Answer:**

```ts
interface Name {
  name: string;
}

interface Age {
  age: number;
}

type Person = Name & Age;

const person: Person = {
  name: 'Alice',
  age: 30,
};
```

### 6. Generics

**Question:** Write a generic function `identity` that takes an argument of any type and returns it. Ensure that the function preserves the type of the argument.

**Answer:**

```ts
const identity = <T extends unknown>(arg: T): T => {
  return arg;
};

// Example usage:
const num = identity(42); // number
const str = identity('hello'); // string
```

### 7. Conditional Types

**Question:** Write a conditional type `IsString<T>` that checks if a type `T` is a string. If `T` is a string, it should return `true`, otherwise `false`.

**Answer:**

```ts
type IsString<T> = T extends string ? true : false;

// Example usage:
type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
```

### 8. Mapped Types

**Question:** Create a mapped type `Optional<T>` that makes all properties of a type `T` optional.

**Answer:**

```ts
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Example usage:
type Person = {
  name: string;
  age: number;
};

type OptionalPerson = Optional<Person>;
// { name?: string; age?: number }
```

### 9. Template Literal Types

**Question:** Create a template literal type `EventName<T>` that generates event names by appending "Changed" to each key of a type `T`.

**Answer:**

```ts
type EventName<T> = {
  [K in keyof T as `${K & string}Changed`]: T[K];
};

// Example usage:
type Person = {
  name: string;
  age: number;
};

type PersonEvents = EventName<Person>;
// { nameChanged: string; ageChanged: number }
```

### 10. Type Assertions

**Question:** Given the following code, use type assertions to fix the type error.

```ts
const someValue: any = 'this is a string';
const strLength: number = someValue.length;
```

**Answer:**

```ts
const someValue: any = 'this is a string';
const strLength: number = (someValue as string).length;
```

### 11. Type Aliases and Interfaces

**Question:** Explain the difference between type aliases and interfaces in TypeScript. When would you use one over the other?

**Answer:**

- **Type Aliases**: Type aliases are used to create a new name for a type. They can represent primitive types, union types, intersection types, and more.
- **Interfaces**: Interfaces are used to define the shape of an object. They can be extended and implemented by classes.

**When to use one over the other:**

- Use interfaces when you need to define the structure of an object and want to take advantage of features like `extends` and `implements`.
- Use type aliases when you need to define complex types, such as union types or intersection types, or when you need to create a name for a type that is not an object.

### 12. Generic Function Merge

**Question:** Write a generic function `merge` that takes two objects and returns a new object that combines the properties of both. Ensure that the types of the properties are preserved.

**Answer:**

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Example usage:
const obj1 = { name: 'Alice' };
const obj2 = { age: 30 };
const mergedObj = merge(obj1, obj2); // { name: "Alice", age: 30 }
```

### 13. Key Remapping in Mapped Types

**Question:** Create a mapped type `RemapKeys` that renames the keys of an object based on a provided mapping type.

**Answer:**

```ts
type RemapKeys<T, M extends { [K in keyof T]: string }> = {
  [K in keyof T as M[K]]: T[K];
};

// Example usage:
type Original = { name: string; age: number };
type Mapping = { name: 'fullName'; age: 'years' };
type Remapped = RemapKeys<Original, Mapping>; // { fullName: string; years: number }
```

### 14. Recursive Types

**Question:** Define a recursive type `NestedArray<T>` that represents an array of type T or an array of `NestedArray<T>`.

**Answer:**

```ts
type NestedArray<T> = T | NestedArray<T>[];

// Example usage:
const example: NestedArray<number> = [1, [2, [3, [4]]]];
```

### 15. Conditional Types with Distributive Property

**Question:** Write a conditional type `Flatten<T>` that flattens a union type of arrays into a single array type.

**Answer:**

```ts
type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;

// Example usage:
type Flattened = Flatten<number[][][]>; // number
```

### 16. Utility Types

**Question:** Using TypeScript's utility types, create a type `ReadonlyPartial<T>` that makes all properties of a type T both readonly and optional.

**Answer:**

```ts
type ReadonlyPartial<T> = Readonly<Partial<T>>;

// Example usage:
type Person = { name: string; age: number };
type ReadonlyPartialPerson = ReadonlyPartial<Person>; // { readonly name?: string; readonly age?: number }
```

### 17. Template Literal Types with Conditional Types

**Question:** Create a template literal type `EventHandler<T>` that generates event handler names by appending "Handler" to each key of a type T if the key is a string.

**Answer:**

```ts
type EventHandler<T> = {
  [K in keyof T as K extends string ? `${K}Handler` : never]: T[K];
};

// Example usage:
type Events = { click: () => void; hover: () => void };
type Handlers = EventHandler<Events>; // { clickHandler: () => void; hoverHandler: () => void }
```

### \*18. Advanced Type Guards

**Question:** Write a type guard function `isStringArray` that checks if a value is an array of strings.

**Answer:**

```ts
function isStringArray(value: any): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === 'string')
  );
}

// Example usage:
const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];
console.log(isStringArray(test1)); // true
console.log(isStringArray(test2)); // false
```

### 19. Discriminated Unions

**Question:** Define a discriminated union type `Shape` with `Circle` and `Square` types, and write a function `getArea` that calculates the area based on the shape type.

**Answer:**

```ts
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; side: number };
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}

// Example usage:
const circle: Circle = { kind: 'circle', radius: 5 };
const square: Square = { kind: 'square', side: 4 };
console.log(getArea(circle)); // 78.53981633974483
console.log(getArea(square)); // 16
```

### 20. Advanced Type Inference

**Question:** Write a function `zip` that takes two arrays and returns an array of tuples, where each tuple contains one element from each array at the same index.

**Answer:**

```ts
function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const result: [T, U][] = [];
  const length = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const zipped = zip(array1, array2); // [[1, "a"], [2, "b"], [3, "c"]]
```

### 21. Advanced Type Manipulation

**Question:** Create a type `DeepReadonly<T>` that makes all properties of an object and its nested objects readonly.

**Answer:**

```ts
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// Example usage:
type NestedObject = { a: { b: { c: string } } };
type ReadonlyNestedObject = DeepReadonly<NestedObject>;
// { readonly a: { readonly b: { readonly c: string } } }
```
