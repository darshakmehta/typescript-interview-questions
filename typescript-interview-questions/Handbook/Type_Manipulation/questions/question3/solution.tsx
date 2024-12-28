// Solution 1:

const msgbox = 'Are you sure you want to continue?';
const shouldContinue: typeof msgbox = msgbox;

console.log(typeof shouldContinue);

// Solution 2:

type ConfigType = typeof config;

const getConfig = (config: ConfigType) => {
  console.log(config.apiUrl, config.timeout, config.retryAttempts);
};

getConfig(config);

// Solution 3:

const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

type UserKeys = keyof typeof user;

const getPropertyValue = <T extends UserKeys>(key: T): (typeof user)[T] => {
  return user[key];
};

console.log(getPropertyValue('id'));
console.log(getPropertyValue('name'));
console.log(getPropertyValue('email'));

// Solution 4:

function createUser(name: string, age: number) {
  return { name, age, createdAt: new Date() };
}

type UserType = ReturnType<typeof createUser>;

const logUserDetails = <
  T extends { name: string; age: number; createdAt: Date }
>({
  name,
  age,
  createdAt,
}: T) => {
  console.log(
    `User name: ${name}, User age: ${age}, User created at: ${createdAt}`
  );
};

logUserDetails(createUser('Darshak', 30));

// Example with another object
const anotherUser = {
  name: 'John',
  age: 25,
  createdAt: new Date(),
  role: 'admin', // generics will provide extensibility
};
logUserDetails(anotherUser);

// Solution 5:

class Car {
  constructor(public model: string, public year: number) {}
}

const myCar = new Car('Tesla', 2021);

type CarType = typeof myCar;

const logCarDetails = ({ model, year }: CarType) => {
  console.log(`Car's model: ${model}`);
  console.log(`Car's year: ${year}`);
};

logCarDetails(myCar);

// Better Solution: Using generics

const logCarDetails = <T extends { model: string; year: number }>({
  model,
  year,
}: T) => {
  console.log(`Car's model: ${model}`);
  console.log(`Car's year: ${year}`);
};

// Solution 6:

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

type SettingsType = typeof settings;

const getSettings = (settings: SettingsType) => {
  console.log('Theme color;', settings.theme.color);
  console.log('User name:', settings.user.name);
};

getSettings(settings);

// Better solution: Destructuring

const fn = ({ theme: { color }, user: { name } }: SettingsType) => {
  console.log('Theme color;', color);
  console.log('User name:', name);
};

// Solution 7:

const data = {
  id: 1,
  value: 'example',
};

type DataType = typeof data;
type IsString<T> = T extends string ? 'string' : 'not string';

type ValueType = IsString<DataType['value']>; // 'string'
type AgeType = IsString<DataType['age']>; // 'not string'

const getPropertyVal = (value: DataType['value']) => {
  return typeof value === 'string' ? 'it is string' : 'it is not string';
};

console.log(getPropertyVal(data.value)); // Output: it is string

// Better solution: Using generics

const getPropertyVal = <K extends keyof DataType>(value: DataType[K]) => {
  return typeof value === 'string' ? 'it is string' : 'it is not string';
};

console.log(getPropertyVal(data.age)); // Error: Property 'age' does not exist on type '{ id: number; value: string; }'.
console.log(getPropertyVal(data.id)); // Output: it is not string
