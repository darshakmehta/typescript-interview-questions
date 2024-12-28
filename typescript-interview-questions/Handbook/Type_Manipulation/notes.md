# Generics

In addition to generic interfaces, we can also create generic classes. Note that it is not possible to create generic enums and namespaces.

A class has two sides to its type: the static side and the instance side. Generic classes are only generic over their instance side rather than their static side, so when working with classes, static members can not use the class’s type parameter.

JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].
