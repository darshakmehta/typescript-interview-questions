# Indexed Access Types

We can use an _indexed access_ type to look up a specific property on another type:

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];

// on hover `Age` -> type Age = number
```

The indexing type is itself a type, so we can use unions, `keyof`, or other types entirely:

```ts
type I1 = Person['age' | 'name'];
// on hover `I1` -> type I1 = string | number

type I2 = Person[keyof Person];
// on hover `I2` -> type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
// on hover `I3` -> type I3 = string | boolean
```

You’ll even see an error if you try to index a property that doesn’t exist:

```ts
type I1 = Person['alve'];
// Property 'alve' does not exist on type 'Person'.
```

Another example of indexing with an arbitrary type is using `number` to get the type of an array’s elements. We can combine this with `typeof` to conveniently capture the element type of an array literal:

```ts
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person = (typeof MyArray)[number];
/* on hover `Person` -> 

type Person = {
  name: string;
  age: number;
};

*/

type Age = (typeof MyArray)[number]['age'];
// on hover `Age` -> type Age = number

// Or

type Age2 = Person['age'];
// on hover `Age2` -> type Age2 = number
```

You can only use types when indexing, meaning you can’t use a `const` to make a variable reference:

```ts
const key = 'age';
type Age = Person[key];
// Type 'key' cannot be used as an index type.
// 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?
```

However, you can use a type alias for a similar style of refactor:

```ts
type key = 'age';
type Age = Person[key];
```
