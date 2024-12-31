1. Advanced Type Guards with `in` Operator

   - **Question**: Write a type guard function `isPerson` that checks if an object has properties `name` and `age`.
   - **Answer**:

     ```ts
     interface Person {
       name: string;
       age: number;
     }

     function isPerson(obj: any): obj is Person {
       return 'name' in obj && 'age' in obj;
     }

     // Example usage:
     const obj1 = { name: 'Alice', age: 30 };
     const obj2 = { name: 'Bob' };

     console.log(isPerson(obj1)); // true
     console.log(isPerson(obj2)); // false
     ```

2. Advanced Union Types

   - **Question**: Create a union type `Result` that can be either `Success` or `Failure`, and write a function `handleResult` that handles both cases.
   - **Answer**:

     ```ts
     interface Success {
       status: 'success';
       data: string;
     }

     interface Failure {
       status: 'failure';
       error: string;
     }

     type Result = Success | Failure;

     function handleResult(result: Result): void {
       if (result.status === 'success') {
         console.log('Data:', result.data);
       } else {
         console.log('Error:', result.error);
       }
     }

     // Example usage:
     const successResult: Success = {
       status: 'success',
       data: 'Operation completed',
     };
     const failureResult: Failure = {
       status: 'failure',
       error: 'Something went wrong',
     };

     handleResult(successResult); // Data: Operation completed
     handleResult(failureResult); // Error: Something went wrong
     ```

3. Advanced Intersection Types

   - **Question**: Create an intersection type `Admin` that combines `User` and `Permissions` interfaces. Then, create a variable of type `Admin`.
   - **Answer**:

     ```ts
     interface User {
       username: string;
       email: string;
     }

     interface Permissions {
       isAdmin: boolean;
       canEdit: boolean;
     }

     type Admin = User & Permissions;

     const admin: Admin = {
       username: 'adminUser',
       email: 'admin@example.com',
       isAdmin: true,
       canEdit: true,
     };
     ```

4. Advanced Conditional Types

   - **Question**: Write a conditional type `IsArray<T>` that checks if a type `T` is an array. If `T` is an array, it should return `true`, otherwise `false`.
   - **Answer**:

     ```ts
     type IsArray<T> = T extends unknown[] ? true : false;

     // Example usage:
     type Test1 = IsArray<number[]>; // true
     type Test2 = IsArray<string>; // false
     ```

5. Advanced Mapped Types with Conditional Types

   - **Question**: Create a mapped type `Nullable<T>` that makes all properties of a type `T` nullable.
   - **Answer**:

     ```ts
     type Nullable<T> = {
       [K in keyof T]: T[K] | null;
     };

     // Example usage:
     type Person = {
       name: string;
       age: number;
     };

     type NullablePerson = Nullable<Person>;
     // { name: string | null; age: number | null }
     ```

6. Advanced Template Literal Types with Union Types

   - **Question**: Create a template literal type `PrefixedKeys<T, P>` that adds a prefix `P` to each key of a type `T`.
   - **Answer**:

     ```ts
     type PrefixedKeys<T, P extends string> = {
       [K in keyof T as `${P}${K & string}`]: T[K];
     };

     // Example usage:
     type Person = {
       name: string;
       age: number;
     };

     type PrefixedPerson = PrefixedKeys<Person, 'prefix_'>;
     // { prefix_name: string; prefix_age: number }
     ```

7. Advanced Recursive Types with Conditional Types

   - **Question**: Create a recursive type `DeepPartial<T>` that makes all properties of an object and its nested objects optional.
   - **Answer**:

     ```ts
     type DeepPartial<T> = {
       [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
     };

     // Example usage:
     type NestedObject = { a: { b: { c: string } } };
     type PartialNestedObject = DeepPartial<NestedObject>;
     // { a?: { b?: { c?: string } } }
     ```

8. Advanced Type Inference with Generics

   - **Question**: Write a generic function `getProperty` that takes an object and a key, and returns the value of the key in the object. Ensure that the key is valid for the object.
   - **Answer**:

     ```ts
     function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
       return obj[key];
     }

     // Example usage:
     const person = { name: 'Alice', age: 30 };
     const name = getProperty(person, 'name'); // string
     const age = getProperty(person, 'age'); // number
     ```

9. Advanced Type Manipulation with Conditional Types

   - **Question**: Create a type `NonNullableProperties<T>` that extracts the non-nullable properties of a type `T`.
   - **Answer**:

     ```ts
     type NonNullableProperties<T> = {
       [K in keyof T]: T[K] extends null | undefined ? never : K;
     }[keyof T];

     // Example usage:
     type Person = {
       name: string;
       age: number | null;
       address?: string;
     };

     type NonNullablePersonProperties = NonNullableProperties<Person>;
     // "name"
     ```

10. Advanced Utility Types with Conditional Types

    - **Question**: Using TypeScript's utility types, create a type `RequiredAndReadonly<T>` that makes all properties of a type `T` both required and readonly.
    - **Answer**:

      ```ts
      type RequiredAndReadonly<T> = {
        readonly [K in keyof T]-?: T[K];
      };

      // Example usage:
      type Person = {
        name?: string;
        age?: number;
      };

      type RequiredAndReadonlyPerson = RequiredAndReadonly<Person>;
      // { readonly name: string; readonly age: number }
      ```
