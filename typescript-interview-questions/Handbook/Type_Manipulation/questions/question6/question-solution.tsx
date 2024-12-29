// 1. How can you create a mapped type that makes all properties of an object readonly?

type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K]; // assumes default +readonly modifier
};

// 2. How can you create a mapped type that makes all properties of an object optional?

type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

// Example usage:
type OptionalPerson = MakeOptional<{ name: string; age: number }>; // { name?: string; age?: number }

// 3. How can you create a mapped type that removes the readonly modifier from all properties of an object?

type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};

// Example usage:
type MutablePerson = RemoveReadonly<{
  readonly name: string;
  readonly age: number;
}>; // { name: string; age: number }

// 4. How can you create a mapped type that removes the optional modifier from all properties of an object?

type RemoveOptional<T> = {
  [K in keyof T]-?: T[K];
};

// Example usage:
type ConcretePerson = RemoveOptional<{ name?: string; age?: number }>; // { name: string; age: number }

// 5. How can you create a mapped type that changes the types of all properties of an object to a specific type?

type ChangeTypes<T, U> = {
  [K in keyof T]: U;
};

// Example usage:
type BooleanPerson = ChangeTypes<{ name: string; age: number }, boolean>; // { name: boolean; age: boolean }

// 6. How can you create a mapped type that adds a prefix to all property names of an object?

type AddPrefix<T, P extends string> = {
  [K in keyof T as `${P}${K & string}`]: T[K];
};

// Example usage:
type PrefixedPerson = AddPrefix<{ name: string; age: number }, 'prefix_'>; // { prefix_name: string; prefix_age: number }

// 7. How can you create a mapped type that filters out properties of an object based on their types?

type FilterProperties<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

// Example usage:
type StringProperties = FilterProperties<
  { name: string; age: number; alive: boolean },
  string
>; // { name: string }

// 8. How can you create a mapped type that extracts the keys of an object that have values of a specific type?

type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// Example usage:
type StringKeys = KeysOfType<
  { name: string; age: number; alive: boolean },
  string
>; // "name"

// 9. How can you create a mapped type that makes all properties of an object nullable?

type MakeNullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Example usage:
type NullablePerson = MakeNullable<{ name: string; age: number }>; // { name: string | null; age: number | null }

// 10. How can you create a mapped type that makes all properties of an object required except for a specific set of keys?

type MakeRequiredExcept<T, K extends keyof T> = Required<T> &
  Partial<Pick<T, K>>;

// Example usage:
type RequiredExceptName = MakeRequiredExcept<
  { name?: string; age?: number; alive?: boolean },
  'name'
>; // { name?: string; age: number; alive: boolean }

// Another solution: (but not great)

type PartialRequired<T, U> = Partial<T> & {
  [K in keyof T as K extends U ? never : K]: T[K];
};

type NameProperties = PartialRequired<
  { name: string; age: number; alive: boolean },
  'name'
>;

const abc: NameProperties = {
  age: 10,
  alive: true,
};
