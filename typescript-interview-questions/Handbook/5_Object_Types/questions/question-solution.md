### 1. Optional Properties

**Question:**
How do you define optional properties in TypeScript, and how can you handle them safely? Provide an example.

**Answer:**
Optional properties are defined by adding a question mark (`?`) to the end of the property name. You can handle them safely by checking for `undefined` or providing default values.

Example:

```ts
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log('x coordinate at', xPos);
  console.log('y coordinate at', yPos);
  // ...
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

In this example, xPos and yPos are optional properties. Default values are provided using destructuring.

### 2. Readonly Properties

**Question:**
What are readonly properties in TypeScript, and how do they differ from regular properties? Provide an example.

**Answer:**
Readonly properties cannot be reassigned after their initial assignment. They are useful for signaling intent that a property should not be modified.

Example:

```ts
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`);
  obj.prop = 'hello'; // Error: Cannot assign to 'prop' because it is a read-only property.
}
```

In this example, prop is a readonly property and cannot be reassigned.

### 3. Index Signatures

**Question:**
How do you define an index signature in TypeScript, and what are its limitations? Provide an example.

**Answer:**
An index signature allows you to define the types of properties that are not known ahead of time. The key type can be string, number, symbol, template string patterns, or a union of these types.

Example:

```ts
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
```

In this example, StringArray has an index signature that allows indexing with a number to get a string.

### 4. Excess Property Checks

**Question:**
What are excess property checks in TypeScript, and how can you get around them? Provide an example.

**Answer:**
Excess property checks ensure that object literals do not have properties that are not expected by the type. You can get around them using type assertions, index signatures, or assigning the object to another variable.

Example:

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

In this example, a type assertion is used to get around excess property checks.

### 5. Extending Types

**Question:**
How do you extend types in TypeScript using interfaces? Provide an example.

**Answer:**
You can extend types using the `extends` keyword in interfaces. This allows you to create a new interface that includes all the properties of the existing interface.

Example:

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

In this example, AddressWithUnit extends BasicAddress and adds a new property unit.

### 6. Intersection Types

**Question:**
What are intersection types in TypeScript, and how do they differ from extending interfaces? Provide an example.

**Answer:**
Intersection types combine multiple types into one using the `&` operator. They differ from extending interfaces in that they can combine any types, not just object types.

Example:

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'blue', radius: 42 });
```

In this example, ColorfulCircle is an intersection type that combines Colorful and Circle.

### 7. Generic Object Types

**Question:**
How do you define and use generic object types in TypeScript? Provide an example.

**Answer:**
Generic object types are defined using type parameters. They allow you to create reusable types that can work with any set of types.

Example:

```ts
interface Box<Type> {
  contents: Type;
}

let box: Box<string> = { contents: 'hello' };

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
```

In this example, Box is a generic type that can hold any type of contents.

### 8. ReadonlyArray Type

**Question:**
What is the ReadonlyArray type in TypeScript, and how does it differ from a regular array? Provide an example.

**Answer:**
ReadonlyArray is a special type that describes arrays that should not be changed. Unlike regular arrays, you cannot modify the contents of a ReadonlyArray.

Example:

```ts
function doStuff(values: ReadonlyArray<string>) {
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
  values.push('hello!'); // Error: Property 'push' does not exist on type 'readonly string[]'.
}

const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'];
```

In this example, values is a ReadonlyArray and cannot be modified.

### 9. Tuple Types

**Question:**
What are tuple types in TypeScript, and how do they differ from regular arrays? Provide an example.

**Answer:**
Tuple types are a special type of array that knows exactly how many elements it contains and the types of those elements at specific positions.

Example:

```ts
type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  const a = pair[0]; // const a: string
  const b = pair[1]; // const b: number
}

doSomething(['hello', 42]);
```

In this example, StringNumberPair is a tuple type that contains a string and a number.

### 10. Readonly Tuple Types

**Question:**
What are readonly tuple types in TypeScript, and how do they differ from regular tuple types? Provide an example.

**Answer:**
Readonly tuple types are tuple types that cannot be modified. They are defined by adding the `readonly` modifier in front of the tuple type.

Example:

```ts
function doSomething(pair: readonly [string, number]) {
  pair[0] = 'hello!'; // Error: Cannot assign to '0' because it is a read-only property.
}

const point: readonly [number, number] = [3, 4];
```

In this example, pair is a readonly tuple type and cannot be modified.
