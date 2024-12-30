# Generics

In addition to generic interfaces, we can also create generic classes. Note that it is not possible to create generic enums and namespaces.

A class has two sides to its type: the static side and the instance side. Generic classes are only generic over their instance side rather than their static side, so when working with classes, static members cannot use the class’s type parameter.

JavaScript object keys are always coerced to a string, so `obj[0]` is always the same as `obj["0"]`.

The `infer` keyword in TypeScript is used within conditional types to infer a type variable from a given type.

In the context of TypeScript template literal types, the order of the intersection (`&`) does not matter.

You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer `interface`. Use `type` when you need specific features.

The use of `public` on parameters to the constructor is a shorthand that allows us to automatically create properties with that name.

The shape-matching only requires a subset of the object’s fields to match. If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

Remember: Type annotations never change the runtime behavior of your program.

While the default target is ES5, the great majority of current browsers support ES2015. Most developers can therefore safely specify ES2015 or above as a target, unless compatibility with certain ancient browsers is important.

The `any` type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

The `as const` suffix acts like `const` but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like `string` or `number`.
