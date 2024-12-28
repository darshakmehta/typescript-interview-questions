type Person = { name: string; age: number; location: string };
type PersonKeys = keyof Person; // "name" | "age" | "location"
type PersonTypes = Person[PersonKeys]; // string | number

type StringIndex = { [key: string]: number };
type StrKeys = keyof StringIndex; // string | number

type NumberIndex = { [key: number]: number };
type NumKeys = keyof NumberIndex; // number

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const person: Person = {
  name: 'John Doe',
  age: 30,
  location: 'New York',
};
