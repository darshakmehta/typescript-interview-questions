### 1. Function Type Expressions

**Question:**
How do you define a function type expression in TypeScript? Provide an example.

**Answer:**
A function type expression describes the types of the parameters and the return type of a function. It is syntactically similar to arrow functions.

Example:

```typescript
function greeter(fn: (a: string) => void) {
    fn('Hello, World');
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);
```

In this example, `(a: string) => void` is a function type expression that describes a function with one parameter of type string and no return value.

### 2. Call Signatures

**Question:**
What is a call signature in TypeScript, and how does it differ from a function type expression? Provide an example.

**Answer:**
A call signature describes a function type with additional properties. It is defined within an object type.

Example:

```typescript
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + ' returned ' + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}
myFunc.description = 'default description';

doSomething(myFunc);
```

In this example, `DescribableFunction` is a call signature that describes a function with a description property and a callable signature.

### 3. Construct Signatures

**Question:**
How do you define a construct signature in TypeScript? Provide an example.

**Answer:**
A construct signature describes a function that can be invoked with the `new` operator. It is defined by adding the `new` keyword in front of a call signature.

Example:

```typescript
type SomeConstructor = {
    new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
    return new ctor('hello');
}
```

In this example, `SomeConstructor` is a construct signature that describes a constructor function.

### 4. Generic Functions

**Question:**
How do you define a generic function in TypeScript? Provide an example.

**Answer:**
A generic function is defined by declaring a type parameter in the function signature. This allows the function to work with different types.

Example:

```typescript
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(['a', 'b', 'c']);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
```

In this example, `firstElement` is a generic function that works with any type of array.

### 5. Constraints in Generic Functions

**Question:**
How do you use constraints in generic functions in TypeScript? Provide an example.

**Answer:**
Constraints are used to limit the kinds of types that a type parameter can accept. This is done using the `extends` keyword.

Example:

```typescript
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'bob');
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
```

In this example, `longest` is a generic function with a constraint that requires the type to have a length property.

### 6. Function Overloads

**Question:**
How do you define function overloads in TypeScript? Provide an example.

**Answer:**
Function overloads are defined by writing multiple function signatures followed by a single implementation.

Example:

```typescript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3); // Error: No overload expects 2 arguments.
```

In this example, `makeDate` has two overloads: one accepting a single argument and another accepting three arguments.

### 7. Declaring this in a Function

**Question:**
How do you declare the type of `this` in a function in TypeScript? Provide an example.

**Answer:**
You can declare the type of `this` in a function by using the `this` parameter.

Example:

```typescript
interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
    return this.admin;
});
```

In this example, the `this` parameter is used to declare the type of `this` in the filter function.

### 8. Rest Parameters and Arguments

**Question:**
How do you define rest parameters and use rest arguments in TypeScript? Provide an example.

**Answer:**
Rest parameters are defined using the `...` syntax and allow a function to accept an unbounded number of arguments. Rest arguments use the spread syntax to provide a variable number of arguments.

Example:

```typescript
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
```

In this example, `multiply` uses rest parameters, and `arr1.push` uses rest arguments.

### 9. Parameter Destructuring

**Question:**
How do you use parameter destructuring in TypeScript? Provide an example.

**Answer:**
Parameter destructuring allows you to unpack objects provided as an argument into local variables in the function body.

Example:

```typescript
type ABC = { a: number; b: number; c: number };

function sum({ a, b, c }: ABC) {
    console.log(a + b + c);
}

sum({ a: 10, b: 3, c: 9 });
```

In this example, the `sum` function uses parameter destructuring to unpack the properties of the `ABC` object.

### 10. void Return Type

**Question:**
What is the `void` return type in TypeScript, and how does it differ from `undefined`? Provide an example.

**Answer:**
The `void` return type represents functions that do not return a value. It is different from `undefined` because a function with a `void` return type can return `undefined`, but it is not required to.

Example:

```typescript
type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
    return true;
};

const v1 = f1();
const v2 = f2();
const v3 = f3();
```

In this example, functions with a `void` return type can return any value, but the return value is ignored.
