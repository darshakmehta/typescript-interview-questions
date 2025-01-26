The concept of **abstraction** can be demonstrated by creating a class that exposes a high-level interface (public methods) to interact with it while hiding the internal implementation details (private methods and properties). Here's an example:

---

### **Coffee Machine Example (Abstraction)**

```ts
// Define an interface for the coffee machine's abstraction
interface CoffeeMachine {
  brewCoffee(): void;
  refillWater(amount: number): void;
  addCoffeeBeans(amount: number): void;
}

// Implementing the CoffeeMachine class
class BasicCoffeeMachine implements CoffeeMachine {
  // Internal state (hidden from external access)
  private waterLevel: number = 0;
  private coffeeBeans: number = 0;

  constructor(initialWater: number = 0, initialCoffeeBeans: number = 0) {
    this.waterLevel = initialWater;
    this.coffeeBeans = initialCoffeeBeans;
  }

  // Public methods (high-level abstraction)
  public brewCoffee(): void {
    if (this.waterLevel <= 0 || this.coffeeBeans <= 0) {
      console.log('Cannot brew coffee. Please refill water and coffee beans.');
      return;
    }
    console.log('Brewing coffee...');
    this.waterLevel--;
    this.coffeeBeans--;
    console.log('Your coffee is ready!');
  }

  public refillWater(amount: number): void {
    console.log(`Refilling water tank with ${amount} units...`);
    this.waterLevel += amount;
    console.log(`Water tank now has ${this.waterLevel} units of water.`);
  }

  public addCoffeeBeans(amount: number): void {
    console.log(`Adding ${amount} units of coffee beans...`);
    this.coffeeBeans += amount;
    console.log(`Coffee bean storage now has ${this.coffeeBeans} units.`);
  }

  // Private methods (internal implementation)
  private heatWater(): void {
    console.log('Heating water...');
  }

  private grindBeans(): void {
    console.log('Grinding coffee beans...');
  }
}

// Example Usage
const coffeeMachine = new BasicCoffeeMachine();

coffeeMachine.brewCoffee(); // Cannot brew coffee. Please refill water and coffee beans.
coffeeMachine.refillWater(5);
coffeeMachine.addCoffeeBeans(3);
coffeeMachine.brewCoffee(); // Brewing coffee...
coffeeMachine.brewCoffee(); // Brewing coffee...
```

---

### **Explanation of the Code**

1. **Public Interface**:

   - Methods like `brewCoffee`, `refillWater`, and `addCoffeeBeans` are part of the **public interface**.
   - They provide a simplified way for external classes (or users) to interact with the coffee machine.

2. **Encapsulation**:

   - Internal state (`waterLevel` and `coffeeBeans`) and private methods (`heatWater`, `grindBeans`) are hidden from external access.
   - This ensures the user cannot interfere with the internal workings of the machine.

3. **Abstraction**:

   - The user doesn't need to know how water is heated or beans are ground.
   - The implementation is abstracted away; they only see the public methods that perform these operations indirectly.

4. **Ease of Maintenance**:
   - If the internal implementation changes (e.g., a new way of grinding beans), it won't affect the public interface, ensuring backward compatibility.

---

### **Cell Phone Example (Abstraction)**

```ts
interface Phone {
  makeCall(number: string): void;
  sendMessage(number: string, message: string): void;
  chargeBattery(amount: number): void;
}

class SmartPhone implements Phone {
  private batteryLevel: number = 50;

  public makeCall(number: string): void {
    if (this.batteryLevel <= 0) {
      console.log('Battery is dead. Please charge the phone.');
      return;
    }
    console.log(`Calling ${number}...`);
    this.batteryLevel -= 5;
    console.log(`Call ended. Battery level is now ${this.batteryLevel}%.`);
  }

  public sendMessage(number: string, message: string): void {
    if (this.batteryLevel <= 0) {
      console.log('Battery is dead. Please charge the phone.');
      return;
    }
    console.log(`Sending message to ${number}: "${message}"`);
    this.batteryLevel -= 2;
    console.log(`Message sent. Battery level is now ${this.batteryLevel}%.`);
  }

  public chargeBattery(amount: number): void {
    console.log(`Charging phone by ${amount}%...`);
    this.batteryLevel = Math.min(this.batteryLevel + amount, 100);
    console.log(`Battery level is now ${this.batteryLevel}%.`);
  }
}

// Example Usage
const phone = new SmartPhone();

phone.makeCall('123-456-7890'); // Calling 123-456-7890...
phone.sendMessage('987-654-3210', 'Hello, world!'); // Sending message...
phone.chargeBattery(20); // Charging phone...
phone.makeCall('555-1234'); // Calling 555-1234...
```

---

### **Advantages of Abstraction**

1. **Simplifies Complexity**:

   - Hides irrelevant details and exposes only what is necessary for interaction.
   - E.g., Users of `SmartPhone` or `BasicCoffeeMachine` don’t need to know their internal mechanics.

2. **Ease of Change**:

   - Internal implementation changes don’t affect external interactions as long as the public interface remains the same.

3. **Reusability**:
   - Abstracted classes can be reused across different programs with minimal modification.

Let me know if you'd like additional examples!

## Coffee Machine Example in React (Functional Component)

```ts
import React, { useState } from 'react';

type CoffeeMachineProps = {};

const CoffeeMachine: React.FC<CoffeeMachineProps> = () => {
  const [waterLevel, setWaterLevel] = useState<number>(0);
  const [coffeeBeans, setCoffeeBeans] = useState<number>(0);

  const brewCoffee = () => {
    if (waterLevel > 0 && coffeeBeans > 0) {
      console.log('Brewing coffee...');
      setWaterLevel(waterLevel - 1);
      setCoffeeBeans(coffeeBeans - 1);
      console.log('Your coffee is ready!');
    } else {
      console.log('Cannot brew coffee. Please refill water and coffee beans.');
    }
  };

  const refillWater = (amount: number) => {
    setWaterLevel(waterLevel + amount);
    console.log(`Refilled water to ${waterLevel + amount}`);
  };

  const addCoffeeBeans = (amount: number) => {
    setCoffeeBeans(coffeeBeans + amount);
    console.log(`Added ${amount} coffee beans. Total: ${coffeeBeans + amount}`);
  };

  return (
    <div>
      <h3>Coffee Machine</h3>
      <p>Water Level: {waterLevel}</p>
      <p>Coffee Beans: {coffeeBeans}</p>
      <button onClick={() => brewCoffee()}>Brew Coffee</button>
      <button onClick={() => refillWater(3)}>Refill Water</button>
      <button onClick={() => addCoffeeBeans(2)}>Add Coffee Beans</button>
    </div>
  );
};

export default CoffeeMachine;
```

## Phone Example in React (Functional Component)

```ts
import React, { useState } from 'react';

type PhoneProps = {};

const Phone: React.FC<PhoneProps> = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(50);

  const makeCall = (number: string) => {
    if (batteryLevel <= 0) {
      console.log('Battery is dead. Please charge the phone.');
      return;
    }
    console.log(`Calling ${number}...`);
    setBatteryLevel(batteryLevel - 5);
  };

  const sendMessage = (number: string, message: string) => {
    if (batteryLevel <= 0) {
      console.log('Battery is dead. Please charge the phone.');
      return;
    }
    console.log(`Sending message to ${number}: "${message}"`);
    setBatteryLevel(batteryLevel - 2);
  };

  const chargeBattery = (amount: number) => {
    const newLevel = Math.min(batteryLevel + amount, 100);
    setBatteryLevel(newLevel);
    console.log(`Charging phone. Battery level is now ${newLevel}%.`);
  };

  return (
    <div>
      <h3>Phone</h3>
      <p>Battery Level: {batteryLevel}%</p>
      <button onClick={() => makeCall('123-456-7890')}>Make Call</button>
      <button onClick={() => sendMessage('987-654-3210', 'Hello!')}>
        Send Message
      </button>
      <button onClick={() => chargeBattery(20)}>Charge Battery</button>
    </div>
  );
};

export default Phone;
```

# React Abstraction Using Props

## Coffee Machine with Props:

```ts
type CoffeeMachineProps = {
  initialWaterLevel?: number;
  initialCoffeeBeans?: number;
};

const CoffeeMachine: React.FC<CoffeeMachineProps> = ({
  initialWaterLevel = 0,
  initialCoffeeBeans = 0,
}) => {
  const [waterLevel, setWaterLevel] = useState<number>(initialWaterLevel);
  const [coffeeBeans, setCoffeeBeans] = useState<number>(initialCoffeeBeans);

  // Same methods as above...

  return (
    <div>
      <h3>Coffee Machine</h3>
      <p>Water Level: {waterLevel}</p>
      <p>Coffee Beans: {coffeeBeans}</p>
      <button onClick={() => brewCoffee()}>Brew Coffee</button>
      <button onClick={() => refillWater(3)}>Refill Water</button>
      <button onClick={() => addCoffeeBeans(2)}>Add Coffee Beans</button>
    </div>
  );
};
```

## Coffee Machine (Class-Based):

```ts
import React, { Component } from 'react';

type CoffeeMachineState = {
  waterLevel: number;
  coffeeBeans: number;
};

class CoffeeMachine extends Component<{}, CoffeeMachineState> {
  state: CoffeeMachineState = {
    waterLevel: 0,
    coffeeBeans: 0,
  };

  brewCoffee = () => {
    const { waterLevel, coffeeBeans } = this.state;
    if (waterLevel > 0 && coffeeBeans > 0) {
      console.log('Brewing coffee...');
      this.setState({
        waterLevel: waterLevel - 1,
        coffeeBeans: coffeeBeans - 1,
      });
    } else {
      console.log('Cannot brew coffee. Please refill water and coffee beans.');
    }
  };

  refillWater = (amount: number) => {
    this.setState((prevState) => ({
      waterLevel: prevState.waterLevel + amount,
    }));
  };

  addCoffeeBeans = (amount: number) => {
    this.setState((prevState) => ({
      coffeeBeans: prevState.coffeeBeans + amount,
    }));
  };

  render() {
    const { waterLevel, coffeeBeans } = this.state;

    return (
      <div>
        <h3>Coffee Machine</h3>
        <p>Water Level: {waterLevel}</p>
        <p>Coffee Beans: {coffeeBeans}</p>
        <button onClick={this.brewCoffee}>Brew Coffee</button>
        <button onClick={() => this.refillWater(3)}>Refill Water</button>
        <button onClick={() => this.addCoffeeBeans(2)}>Add Coffee Beans</button>
      </div>
    );
  }
}

export default CoffeeMachine;
```
