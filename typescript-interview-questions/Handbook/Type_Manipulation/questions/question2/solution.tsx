// Solution 1:

type Person = { name: string; age: number; location: string };
type PersonKeys = keyof Person; // "name" | "age" | "location"

// Solution 2:

type StringIndex = { [key: string]: number };
type StrKeys = keyof StringIndex; // string | number

// Solution 3:

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

// Solution 4:

type ReadonlyPerson = {
  readonly name: string;
  readonly age: number;
  readonly location: string;
};

// Solution 5:

type Person = { name: string; age: number; location: string };
type ReadonlyPerson = Readonly<Person>;

type ExtractStringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type Person = { name: string; age: number; location: string };
type StringKeys = ExtractStringKeys<Person>; // "name" | "location"

// Solution 6:

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

type NestedKeys = keyof NestedObject; // "user" | "settings"

// Solution 7:

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retryAttempts: 3,
};

type ConfigKeys = keyof typeof config; // "apiUrl" | "timeout" | "retryAttempts"

// Solution 8

type FunctionWithParams = (x: number, y: string) => boolean;
type ParamKeys = keyof Parameters<FunctionWithParams>; // 0 | 1

// The keyof Parameters<FunctionWithParams> will produce a union of the indices of the parameters tuple, which are 0 and 1, not x and y.

// Parameters<FunctionWithParams> produces a tuple type of the parameters of the function, which is [number, string].
// keyof Parameters<FunctionWithParams> produces a union of the indices of this tuple, which are 0 and 1.

// Solution 9:

type UnionType = { a: string } | { b: number };
type UnionKeys = keyof UnionType; // "a" | "b"

// Solution 10:

type Person = { name: string; age: number; location: string };
type PersonKeys = keyof Person;

type PersonWithDefaults = {
  [K in PersonKeys]?: Person[K];
};

// Answer
type PersonWithDefaultsEqui = {
  name?: string;
  age?: number;
  location?: string;
};
