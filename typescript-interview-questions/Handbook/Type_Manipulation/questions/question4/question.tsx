// 1. What is the type of `Name`?

type Person = { age: number; name: string; alive: boolean };
type Name = Person['name'];

// 2. What is the type of `I1`?

type I1 = Person['age' | 'alive'];

// 3. What is the type of `I2`?

type I2 = Person[keyof Person];

// 4. What is the type of `I3`?

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];

// 5. What error will you see if you try to index a property that doesn’t exist?

type I4 = Person['alve'];

// 6. What is the type of `Person` when using `typeof` and `number` to get the type of an array’s elements?

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type PersonFromArray = (typeof MyArray)[number];

// 7. What is the type of `Age` when using `typeof` and `number` to get the type of an array’s elements?

type Age = (typeof MyArray)[number]['age'];

// 8. What is the type of `Age2`?

type Age2 = Person['age'];

// 9. Why can't you use a `const` to make a variable reference when indexing?

const key = 'age';
type Age3 = Person[key];

// 10. How can you use a type alias for a similar style of refactor?

// 11. How can you create a type that extracts the types of all properties of an object that are of a specific type?

type Person = { name: string; age: number; alive: boolean };
type StringProperties<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
type PersonStringProperties = StringProperties<Person>; // "name"

// 12. How can you create a type that makes all properties of an object optional except for a specific set of keys?

type MakeOptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;
type PersonOptionalExceptName = MakeOptionalExcept<Person, 'name'>;

// 13. How can you create a type that extracts the types of all properties of an object that are not of a specific type?

type NonStringProperties<T> = {
  [K in keyof T]: T[K] extends string ? never : K;
}[keyof T];
type PersonNonStringProperties = NonStringProperties<Person>; // "age" | "alive"

// 14. How can you create a type that maps over an object's properties and changes their types based on a condition?

type MapProperties<T> = {
  [K in keyof T]: T[K] extends string ? number : T[K];
};
type MappedPerson = MapProperties<Person>; // { name: number; age: number; alive: boolean }

// 15. How can you create a type that extracts the types of all properties of an object that are functions?

type FunctionProperties<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
type PersonWithMethods = { name: string; age: number; greet: () => void };
type PersonFunctionProperties = FunctionProperties<PersonWithMethods>; // "greet"

// 16. How can you create a type that makes all properties of an object required except for a specific set of keys?

type MakeRequiredExcept<T, K extends keyof T> = Required<T> &
  Partial<Pick<T, K>>;
type PersonRequiredExceptName = MakeRequiredExcept<Person, 'name'>;

// 17. How can you create a type that extracts the types of all properties of an object that are arrays?

type ArrayProperties<T> = {
  [K in keyof T]: T[K] extends any[] ? K : never;
}[keyof T];
type PersonWithArray = { name: string; hobbies: string[]; age: number };
type PersonArrayProperties = ArrayProperties<PersonWithArray>; // "hobbies"

// 18. How can you create a type that makes all properties of an object readonly except for a specific set of keys?

type MakeReadonlyExcept<T, K extends keyof T> = Readonly<T> & {
  -readonly [P in K]: T[P];
};
type PersonReadonlyExceptName = MakeReadonlyExcept<Person, 'name'>;

// 19. How can you create a type that extracts the types of all properties of an object that are objects themselves?

type ObjectProperties<T> = {
  [K in keyof T]: T[K] extends object ? K : never;
}[keyof T];
type PersonWithNestedObject = {
  name: string;
  address: { city: string; zip: number };
  age: number;
};
type PersonObjectProperties = ObjectProperties<PersonWithNestedObject>; // "address"

// 20. How can you create a type that makes all properties of an object nullable except for a specific set of keys?

type MakeNullableExcept<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? T[P] : T[P] | null;
};
type PersonNullableExceptName = MakeNullableExcept<Person, 'name'>;
