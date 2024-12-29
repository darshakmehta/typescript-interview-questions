// 1. How can you create a conditional type that checks if a type is a union type?

type IsUnion<T> = [T] extends [infer U]
  ? [U] extends [T]
    ? false
    : true
  : never;

// Example usage:
type Test1 = IsUnion<string | number>; // true
type Test2 = IsUnion<string>; // false

// 2. How can you create a conditional type that extracts the element type of an array or returns the type itself if it's not an array?

type ExtractArrayElementType<T> = T extends (infer U)[] ? U : T;

// Example usage:
type ElementType1 = ExtractArrayElementType<string[]>; // string
type ElementType2 = ExtractArrayElementType<number>; // number

// 3. How can you create a conditional type that checks if a type is a function?

type IsFunction<T> = T extends (...args: unknown[]) => unknown ? true : false;

// Example usage:
type TestFunction1 = IsFunction<() => void>; // true
type TestFunction2 = IsFunction<string>; // false

// 4. How can you create a conditional type that extracts the return type of a function or returns never if it's not a function?

type ExtractReturnType<T> = T extends (...args: unknown[]) => infer R
  ? R
  : never;

// Example usage:
type ReturnType1 = ExtractReturnType<() => string>; // string
type ReturnType2 = ExtractReturnType<number>; // never

// 5. How can you create a conditional type that checks if a type is a tuple?

type IsTuple<T> = T extends [infer A, ...infer B] ? true : false;

// Example usage:
type TestTuple1 = IsTuple<[number, string]>; // true
type TestTuple2 = IsTuple<number[]>; // false

// 6. How can you create a conditional type that flattens a nested array type?

type FlattenArray<T> = T extends (infer U)[]
  ? U extends unknown[]
    ? FlattenArray<U>
    : U
  : T;

// Example usage:
type Flattened1 = FlattenArray<number[][][]>; // number
type Flattened2 = FlattenArray<string[]>; // string

// 7. How can you create a conditional type that checks if a type is an object?

type IsObject<T> = T extends object
  ? T extends Function
    ? false
    : true
  : false;

// Example usage:
type TestObject1 = IsObject<{ a: number }>; // true
type TestObject2 = IsObject<() => void>; // false

// 8. How can you create a conditional type that extracts the keys of an object that have values of a specific type?

type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];

// Example usage:
type KeysOfString = KeysOfType<{ a: string; b: number; c: string }, string>; // "a" | "c"

// 9. How can you create a conditional type that checks if a type is a primitive type?

type IsPrimitive<T> = T extends
  | string
  | number
  | boolean
  | symbol
  | null
  | undefined
  ? true
  : false;

// Example usage:
type TestPrimitive1 = IsPrimitive<string>; // true
type TestPrimitive2 = IsPrimitive<{ a: number }>; // false

// 10. How can you create a conditional type that converts all properties of an object to optional properties?

type MakeOptional<T> = { [K in keyof T]?: T[K] };

// Example usage:
type OptionalPerson = MakeOptional<{ name: string; age: number }>; // { name?: string; age?: number }

// Another solution: using Partial

// Using the built-in Partial type
type MakeOptionalType<T> = Partial<T>;

// Example usage:
type OptionalPersonType = MakeOptional<{ name: string; age: number }>; // { name?: string; age?: number }
