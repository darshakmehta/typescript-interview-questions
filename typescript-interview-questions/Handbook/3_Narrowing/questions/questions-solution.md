1. Type Guards with `typeof`

**Question:** Explain how TypeScript uses the `typeof` operator for type narrowing. Provide an example function that uses `typeof` to narrow down types.

**Answer:** TypeScript uses the `typeof` operator to determine the type of a variable at runtime and narrow down its type within specific branches of code. This is known as a type guard.

**Example:**

```ts
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}
```

In this example, `typeof padding === 'number'` is a type guard that narrows the type of `padding` to `number` within the `if` block.

2. Truthiness Narrowing

**Question:** What is truthiness narrowing in TypeScript? Provide an example function that uses truthiness narrowing to handle different types.

**Answer:** Truthiness narrowing in TypeScript refers to the process of narrowing down types based on whether a value is truthy or falsy. This is commonly used in conditionals to check for `null` or `undefined` values.

**Example:**

```ts
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  }
}
```

In this example, `if (strs && typeof strs === 'object')` checks if `strs` is truthy and an object, narrowing down the type of `strs` to `string[]`.

3. Equality Narrowing

**Question:** How does TypeScript use equality checks for type narrowing? Provide an example function that uses equality checks to narrow down types.

**Answer:** TypeScript uses equality checks (`===`, `!==`, `==`, `!=`) to narrow down types by comparing values. When two values are compared, TypeScript can infer more specific types based on the result of the comparison.

**Example:**

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
```

In this example, `if (x === y)` narrows down the types of `x` and `y` to `string` within the `if` block.

4. The `in` Operator Narrowing

**Question:** Describe how the `in` operator is used for type narrowing in TypeScript. Provide an example function that uses the `in` operator to narrow down types.

**Answer:** The `in` operator is used to check if a property exists in an object or its prototype chain. TypeScript uses this check to narrow down types based on the presence of specific properties.

**Example:**

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
}
```

In this example, `if ('swim' in animal)` narrows down the type of `animal` to `Fish` within the `if` block.

5. The `instanceof` Operator Narrowing

**Question:** Explain how the `instanceof` operator is used for type narrowing in TypeScript. Provide an example function that uses the `instanceof` operator to narrow down types.

**Answer:** The `instanceof` operator checks whether an object is an instance of a specific class or constructor function. TypeScript uses this check to narrow down types based on the result of the `instanceof` check.

**Example:**

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
```

In this example, `if (x instanceof Date)` narrows down the type of `x` to `Date` within the `if` block.

6. Control Flow Analysis

**Question:** What is control flow analysis in TypeScript, and how does it help with type narrowing? Provide an example function that demonstrates control flow analysis.

**Answer:** Control flow analysis in TypeScript refers to the process of analyzing the flow of code to determine the most specific type of a variable at any given point. This helps TypeScript narrow down types based on the structure and logic of the code.

**Example:**

```ts
function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;
  console.log(x); // let x: boolean

  if (Math.random() < 0.5) {
    x = 'hello';
    console.log(x); // let x: string
  } else {
    x = 100;
    console.log(x); // let x: number
  }

  return x; // let x: string | number
}
```

In this example, TypeScript uses control flow analysis to narrow down the type of `x` based on the assignments and conditions within the function.

7. User-Defined Type Guards

**Question:** What are user-defined type guards in TypeScript, and how are they used? Provide an example function that defines and uses a user-defined type guard.

**Answer:** User-defined type guards are functions that return a type predicate, allowing developers to define custom logic for narrowing down types. The type predicate takes the form `parameterName is Type`.

**Example:**

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
```

In this example, `isFish` is a user-defined type guard that narrows down the type of `pet` to `Fish` if the condition is met.

8. Assertion Functions

**Question:** What are assertion functions in TypeScript, and how are they used for type narrowing? Provide an example function that defines and uses an assertion function.

**Answer:** Assertion functions are functions that throw an error if a condition is not met. They use the `asserts` keyword to narrow down types based on the condition being true.

**Example:**

```ts
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

function assertIsString(val: any): asserts val is string {
  if (typeof val !== 'string') {
    throw new Error('Not a string!');
  }
}

function yell(str: any) {
  assertIsString(str);
  return str.toUpperCase();
}
```

In this example, `assertIsString` is an assertion function that narrows down the type of `str` to `string` if the condition is met.

9. Discriminated Unions

**Question:** What are discriminated unions in TypeScript, and how do they help with type narrowing? Provide an example function that uses discriminated unions.

**Answer:** Discriminated unions are a way to combine multiple types into a single union type, where each type has a common property with a unique literal value. This helps TypeScript narrow down types based on the value of the common property.

**Example:**

```ts
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

In this example, `Shape` is a discriminated union, and the `getArea` function uses the `kind` property to narrow down the type of `shape`.

10. The `never` Type

**Question:** What is the `never` type in TypeScript, and how is it used in type narrowing? Provide an example function that uses the `never` type.

**Answer:** The `never` type represents values that never occur. It is used in type narrowing to indicate that a certain code path is unreachable. This is useful for exhaustive type checking in switch statements.

**Example:**

```ts
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: 'triangle';
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return (Math.sqrt(3) / 4) * shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

In this example, the `never` type is used in the `default` case of the switch statement to ensure that all possible cases of the `Shape` union are handled. If a new shape is added to the `Shape` union, TypeScript will produce an error, indicating that the switch statement needs to be updated.

These questions cover various advanced aspects of type narrowing in TypeScript, including type guards, truthiness narrowing, equality narrowing, the `in` operator, the `instanceof` operator, control flow analysis, user-defined type guards, assertion functions, discriminated unions, and the `never` type.
