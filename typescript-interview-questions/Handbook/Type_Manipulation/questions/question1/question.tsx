// Question #1: Convert following function to arrow function

function identity<Type>(arg: Type): Type {
  return arg;
}

// Follow-up questions:

// 1. What is the return type of this function? // Answer: Type
// 2. What is the type of the argument? // Answer: Type
// 3. What is the type of the function itself? // Answer: <Type>(arg: Type) => Type
// 4. What is the type of the generic argument? // Answer: Type
// 5. What is the type of the generic return value? // Answer: Type
// 6. What is the type of the generic function itself? // Answer: <Type>(arg: Type) => Type
// 7. What is the type of the generic argument and return value? // Answer: Type
// 8. What is the type of the generic function itself?  // Answer: <Type>(arg: Type) => Type
// 9. What is the type of the generic argument and return value? // Answer: Type
// 10. Ways to call identity function? // Answer: identity<Type>(arg) i.e const result = identity<string>("Hello World");
// 11. Argument inference in identity function? // Answer: const result = identity("Hello World");
