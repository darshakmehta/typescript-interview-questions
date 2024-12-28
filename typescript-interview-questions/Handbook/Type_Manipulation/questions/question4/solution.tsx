// 1. What is the type of `Name`?

type Person = { age: number; name: string; alive: boolean };
type Name = Person['name']; // string

// 2. What is the type of `I1`?

type I1 = Person['age' | 'alive']; // number | boolean

// 3. What is the type of `I2`?

type I2 = Person[keyof Person]; // string | number | boolean

// 4. What is the type of `I3`?

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName]; // string | boolean

// 5. What error will you see if you try to index a property that doesn’t exist?

type I4 = Person['alve']; // Property 'alve' does not exist on type 'Person'.

// 6. What is the type of `Person` when using `typeof` and `number` to get the type of an array’s elements?

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type PersonFromArray = (typeof MyArray)[number]; // { name: string; age: number; }

// 7. What is the type of `Age` when using `typeof` and `number` to get the type of an array’s elements?

type Age = (typeof MyArray)[number]['age']; // number

// 8. What is the type of `Age2`?

type Age2 = Person['age']; // number

// 9. Why can't you use a `const` to make a variable reference when indexing?

const key = 'age';
type Age3 = Person[key];

// Solution:
// Type 'key' cannot be used as an index type.
// 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?

// 10. How can you use a type alias for a similar style of refactor?

type key = 'age';
type Age4 = Person[key]; // number

// 11. How can you create a type that extracts the types of all properties of an object that are of a specific type?

type Person = { name: string; age: number; alive: boolean };
type StringProperties<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
type PersonStringProperties = StringProperties<Person>; // "name"

// Better Solution:

// Generic type to extract keys of properties that match a specified type
type Person = { name: string; age: number; alive: boolean; birthdate: Date };

type PropertiesOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// Use the generic type to extract keys of properties that are strings
type StringProperties = PropertiesOfType<Person, string>; // "name"

// Use the generic type to extract keys of properties that are numbers
type NumberProperties = PropertiesOfType<Person, number>; // "age"

// Use the generic type to extract keys of properties that are booleans
type BooleanProperties = PropertiesOfType<Person, boolean>; // "alive"

// Use the generic type to extract keys of properties that are Dates
type DateProperties = PropertiesOfType<Person, Date>; // "birthdate"

// 12. How can you create a type that makes all properties of an object optional except for a specific set of keys?

type MakeOptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;
type PersonOptionalExceptName = MakeOptionalExcept<Person, 'name'>;

// Explanation:

// type MakeOptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>; defines a type that combines Partial<T> and Pick<T, K>.
// Partial<T> makes all properties of T optional.
// Pick<T, K> creates a type with only the properties K from T.
// The intersection Partial<T> & Pick<T, K> results in a type where all properties are optional except for the properties specified by K.
// type PersonOptionalExceptName = MakeOptionalExcept<Person, 'name'>; uses the MakeOptionalExcept type to create a type where all properties of Person are optional except for name.
// So, the type PersonOptionalExceptName will be:

type PersonOptionalExceptName = {
  name: string;
  age?: number;
  alive?: boolean;
};

// To pass multiple keys to the MakeOptionalExcept type, you can use a union type:
type PersonOptionalExceptName = MakeOptionalExcept<Person, 'name' | 'age'>;

// 13. How can you create a type that extracts the types of all properties of an object that are not of a specific type?

type NonStringProperties<T> = {
  [K in keyof T]: T[K] extends string ? never : K;
}[keyof T];
type PersonNonStringProperties = NonStringProperties<Person>; // "age" | "alive"

// generic solution:

type PersonObj = { name: string; age: number; alive: boolean };

type NotCertainType<T, U> = {
  [K in keyof T]: T[K] extends U ? never : K;
}[keyof T];

type ExcludeProperties<T, U> = Pick<T, NotCertainType<T, U>>;

type NonStringProps = ExcludeProperties<Person, string>;

const a: NonStringProps = {
  age: 30,
  alive: true,
};

// 14. How can you create a type that maps over an object's properties and changes their types based on a condition?

type MapProperties<T> = {
  [K in keyof T]: T[K] extends string ? number : T[K];
};
type MappedPerson = MapProperties<Person>; // { name: number; age: number; alive: boolean }

// generic solution:

type PersonObject = { name: string; age: number; alive: boolean };

type PropsTypes<T, U, V> = {
  [K in keyof T]: T[K] extends U ? V : T[K];
};

const pObj: PropsTypes<PersonObject, string, number> = {
  name: 45,
  age: 30,
  alive: true,
};

// 15. How can you create a type that extracts the types of all properties of an object that are functions?

type FunctionProperties<T> = {
  [K in keyof T]: T[K] extends (...args: unknown[]) => unknown ? K : never;
}[keyof T];
type PersonWithMethods = { name: string; age: number; greet: () => void };
type PersonFunctionProperties = FunctionProperties<PersonWithMethods>; // "greet"

// 16. How can you create a type that makes all properties of an object required except for a specific set of keys?

type MakeRequiredExcept<T, K extends keyof T> = Required<T> &
  Partial<Pick<T, K>>;
type PersonRequiredExceptName = MakeRequiredExcept<Person, 'name'>;

// 17. How can you create a type that extracts the types of all properties of an object that are arrays?

type ArrayProperties<T> = {
  [K in keyof T]: T[K] extends unknown[] ? K : never;
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
