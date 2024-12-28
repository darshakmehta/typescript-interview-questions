// 1. What is the type of shouldContinue?

let shouldContinue: typeof msgbox("Are you sure you want to continue?");
console.log(typeof shouldContinue);

// 2. How would you create a function that accepts an argument of type ConfigType and logs its properties?

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retryAttempts: 3,
};

// 3. How would you create a function that accepts a key of type UserKeys and returns the corresponding value from the user object?

const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

// 4. How would you create a function that accepts an argument of type UserType and logs the user's name and age?

function createUser(name: string, age: number) {
  return { name, age, createdAt: new Date() };
}

// 5. How would you create a function that accepts an argument of type CarType and logs the car's model and year?

class Car {
  constructor(public model: string, public year: number) {}
}

const myCar = new Car('Tesla', 2021);

// 6. How would you create a function that accepts an argument of type SettingsType and logs the theme color and user name?

const settings = {
  theme: {
    color: 'blue',
    fontSize: 14,
  },
  user: {
    name: 'Alice',
    loggedIn: true,
  },
};

// 7. What is the type of ValueType? How would you create a function that accepts a value of type DataType["value"] and returns a message based on whether it is a string or not?

const data = {
  id: 1,
  value: 'example',
};

type DataType = typeof data;
type IsString<T> = T extends string ? 'string' : 'not string';

type ValueType = IsString<DataType['value']>;
