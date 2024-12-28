// 1. What is the type of PersonKeys?

type Person = { name: string; age: number; location: string };
type PersonKeys = keyof Person; // "name" | "age" | "location"
type PersonTypes = Person[PersonKeys]; // string | number

// 2. What is the type of Keys?
type StringIndex = { [key: string]: number };
type StrKeys = keyof StringIndex; // string | number

type NumberIndex = { [key: number]: number };
type NumKeys = keyof NumberIndex; // number

// 3. What are the types of 'name' and 'age'?

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const person: Person = {
  name: 'John Doe',
  age: 30,
  location: 'New York',
};
const name = getProperty(person, 'name');
const age = getProperty(person, 'age');

// 4. What is the type of ReadonlyPerson?

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 5. What is the type of StringKeys?

type Person = { name: string; age: number; location: string };
type ReadonlyPerson = Readonly<Person>;

type ExtractStringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type Person = { name: string; age: number; location: string };
type StringKeys = ExtractStringKeys<Person>;

// 6. What is the type of NestedKeys?

type NestedObject = {
  user: {
    id: number;
    name: string;
  };
  settings: {
    theme: string;
    notifications: boolean;
  };
};

type NestedKeys = keyof NestedObject;

// 7. What is the type of ConfigKeys?

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retryAttempts: 3,
};

type ConfigKeys = keyof typeof config;

// *8. What is the type of ParamKeys?

type FunctionWithParams = (x: number, y: string) => boolean;
type ParamKeys = keyof Parameters<FunctionWithParams>;

// 9. What is the type of UnionKeys?

type UnionType = { a: string } | { b: number };
type UnionKeys = keyof UnionType;

// 10. What is the type of PersonWithDefaults?

type Person = { name: string; age: number; location: string };
type PersonKeys = keyof Person;

type PersonWithDefaults = {
  [K in PersonKeys]?: Person[K];
};
