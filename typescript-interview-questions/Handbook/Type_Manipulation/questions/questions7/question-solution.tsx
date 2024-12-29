// 1. How can you create a template literal type that generates all possible combinations of two sets of strings?

type Combine<A extends string, B extends string> = `${A}${B}`;

// Example usage:
type Set1 = 'A' | 'B';
type Set2 = '1' | '2';
type Combinations = Combine<Set1, Set2>; // "A1" | "A2" | "B1" | "B2"

// 2. How can you create a template literal type that generates all possible combinations of three sets of strings?

type CombineThree<
  A extends string,
  B extends string,
  C extends string
> = `${A}${B}${C}`;

// Example usage:
type SetA = 'X' | 'Y';
type SetB = '1' | '2';
type SetC = 'a' | 'b';
type AllCombinations = CombineThree<SetA, SetB, SetC>; // "X1a" | "X1b" | "X2a" | "X2b" | "Y1a" | "Y1b" | "Y2a" | "Y2b"

// 3. How can you create a template literal type that converts all keys of an object to uppercase?

type UppercaseKeys<T> = {
  [K in keyof T as Uppercase<K & string>]: T[K];
};

// Example usage:
type Person = { name: string; age: number };
type UppercasePersonKeys = UppercaseKeys<Person>; // { NAME: string; AGE: number }

// 4. How can you create a template literal type that adds a prefix to all keys of an object?

type AddPrefixToKeys<T, P extends string> = {
  [K in keyof T as `${P}${K & string}`]: T[K];
};

// Example usage:
type PersonWithPrefix = AddPrefixToKeys<Person, 'prefix_'>; // { prefix_name: string; prefix_age: number }

// 5. How can you create a template literal type that generates event names for an object with a specific suffix?

type EventNames<T, Suffix extends string> = {
  [K in keyof T as `${K & string}${Suffix}`]: T[K];
};

// Example usage:
type PersonEvents = EventNames<Person, 'Changed'>; // { nameChanged: string; ageChanged: number }

// *6. How can you create a template literal type that generates getter method names for an object?

type Getters<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};

// Example usage:
type PersonGetters = Getters<Person>; // { getName: () => string; getAge: () => number }

// *7. How can you create a template literal type that generates setter method names for an object?

type Setters<T> = {
  [K in keyof T as `set${Capitalize<K & string>}`]: (value: T[K]) => void;
};

// Example usage:
type PersonSetters = Setters<Person>; // { setName: (value: string) => void; setAge: (value: number) => void }

// 8. How can you create a template literal type that generates both getter and setter method names for an object?

type GettersAndSetters<T> = Getters<T> & Setters<T>;

// Example usage:
type PersonGettersAndSetters = GettersAndSetters<Person>; // { getName: () => string; getAge: () => number; setName: (value: string) => void; setAge: (value: number) => void }

// 9. How can you create a template literal type that generates all possible combinations of a set of strings with a fixed prefix and suffix?

type CombineWithPrefixSuffix<
  Prefix extends string,
  Set extends string,
  Suffix extends string
> = `${Prefix}${Set}${Suffix}`;

// Example usage:
type Set = 'A' | 'B' | 'C';
type PrefixedSuffixedCombinations = CombineWithPrefixSuffix<
  'pre_',
  Set,
  '_suf'
>; // "pre_A_suf" | "pre_B_suf" | "pre_C_suf"

// 10. How can you create a template literal type that generates all possible combinations of a set of strings with a fixed prefix and a dynamic suffix?

type CombineWithPrefixDynamicSuffix<
  Prefix extends string,
  Set extends string,
  Suffix extends string
> = `${Prefix}${Set}${Suffix}`;

// Example usage:
type DynamicSuffixSet = 'X' | 'Y';
type PrefixedDynamicSuffixedCombinations = CombineWithPrefixDynamicSuffix<
  'pre_',
  Set,
  DynamicSuffixSet
>; // "pre_AX" | "pre_AY" | "pre_BX" | "pre_BY" | "pre_CX" | "pre_CY"
