## Regular function

```ts
type Mood = 'HAPPY' | 'SAD';

interface CatState {
  hungry: number;
  energy: number;
  mood: Mood;
}

class Cat {
  private cat: CatState;
  // Remove Redundant Use of Interface for Private State:
  // While defining CatState for the Cat class state is okay, it's not necessary to use an interface for something entirely internal unless it provides benefits like external contracts.
  // You could inline the properties directly within the class.
  // If the interface is used elsewhere (e.g., passed around or for dependency injection), it makes sense to keep.

  constructor(cat: CatState) {
    this.cat = { ...cat };
  }

  // Make Private Methods Truly Private:
  // TypeScript supports #-style private fields/methods, which offer true privacy (as opposed to private, which is compile-time enforced).
  // Consider using #meow for stricter encapsulation.
  #meow(): void {
    console.log(
      `I am feeling ${this.cat.mood} with energy level ${this.cat.energy} and hunger level ${this.cat.hungry}.`
    );
  }

  public sleep(): void {
    this.cat.energy++;
    this.cat.hungry++;
    console.log('The cat is sleeping...');
    this.logState();
  }

  public feed(): void {
    if (this.cat.hungry > 0) {
      this.cat.hungry--;
      this.cat.energy++;
      this.cat.mood = 'HAPPY';
      console.log('Feeding the cat...');
    } else {
      console.log('The cat is not hungry.');
    }
    this.#meow();
  }

  public play(): void {
    if (this.cat.energy > 0) {
      this.cat.energy--;
      this.cat.mood = 'SAD';
      console.log('Playing with the cat...');
    } else {
      console.log('The cat is too tired to play.');
    }
    this.#meow();
  }

  public getState(): CatState {
    return { ...this.cat };
  }

  private logState(): void {
    console.log(
      `Current state -> Hungry: ${this.cat.hungry}, Energy: ${this.cat.energy}, Mood: ${this.cat.mood}`
    );
  }
}

const cat = new Cat({ hungry: 3, energy: 2, mood: 'HAPPY' } as CatState);

cat.feed(); // Feeding the cat...
cat.play(); // Playing with the cat...
cat.sleep(); // The cat is sleeping...
console.log(cat.getState()); // { hungry: 3, energy: 3, mood: 'HAPPY' }
```

## Using arrow function

Note: Methods like sleep, feed, play, and meow are written as arrow functions (() =>) to ensure they are bound to the class instance without requiring explicit binding in the constructor.

```ts
type Mood = 'HAPPY' | 'SAD';

interface CatState {
  hungry: number;
  energy: number;
  mood: Mood;
}

class CatComponent extends React.Component<{}, CatState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hungry: 3,
      energy: 2,
      mood: 'HAPPY',
    };
  }

  // Using arrow functions to bind automatically
  private meow = (): void => {
    console.log(
      `I am feeling ${this.state.mood} with energy level ${this.state.energy} and hunger level ${this.state.hungry}.`
    );
  };

  public sleep = (): void => {
    this.setState(
      (prevState) => ({
        energy: prevState.energy + 1,
        hungry: prevState.hungry + 1,
      }),
      this.logState
    );
  };

  public feed = (): void => {
    if (this.state.hungry > 0) {
      this.setState(
        (prevState) => ({
          hungry: prevState.hungry - 1,
          energy: prevState.energy + 1,
          mood: 'HAPPY',
        }),
        this.meow
      );
    } else {
      console.log('The cat is not hungry.');
    }
  };

  public play = (): void => {
    if (this.state.energy > 0) {
      this.setState(
        (prevState) => ({
          energy: prevState.energy - 1,
          mood: 'SAD',
        }),
        this.meow
      );
    } else {
      console.log('The cat is too tired to play.');
    }
  };

  private logState = (): void => {
    console.log(
      `Current state -> Hungry: ${this.state.hungry}, Energy: ${this.state.energy}, Mood: ${this.state.mood}`
    );
  };

  render() {
    return (
      <div>
        <h1>The Cat Component</h1>
        <button onClick={this.feed}>Feed</button>
        <button onClick={this.play}>Play</button>
        <button onClick={this.sleep}>Sleep</button>
        <div>
          <p>Hungry: {this.state.hungry}</p>
          <p>Energy: {this.state.energy}</p>
          <p>Mood: {this.state.mood}</p>
        </div>
      </div>
    );
  }
}
```

## Using Regular Methods with Manual Binding

```ts
class CatComponent extends React.Component<{}, CatState> {
  constructor(props: {}) {
    super(props);
    this.state = { hungry: 3, energy: 2, mood: 'HAPPY' };
    this.feed = this.feed.bind(this);
    this.play = this.play.bind(this);
    this.sleep = this.sleep.bind(this);
  }

  // You cannot use #meow (private fields) directly in React class components
  // because React's state management and component lifecycle methods require
  // accessible methods and fields. The # syntax for private fields is a
  // JavaScript feature that enforces true privacy, meaning they are not
  // accessible outside the class, even by React itself.
  private meow(): void {
    console.log(
      `I am feeling ${this.state.mood} with energy level ${this.state.energy} and hunger level ${this.state.hungry}.`
    );
  }

  public sleep(): void {
    this.setState(
      (prevState) => ({
        energy: prevState.energy + 1,
        hungry: prevState.hungry + 1,
      }),
      this.logState
    );
  }

  public feed(): void {
    if (this.state.hungry > 0) {
      this.setState(
        (prevState) => ({
          hungry: prevState.hungry - 1,
          energy: prevState.energy + 1,
          mood: 'HAPPY',
        }),
        this.meow
      );
    } else {
      console.log('The cat is not hungry.');
    }
  }

  public play(): void {
    if (this.state.energy > 0) {
      this.setState(
        (prevState) => ({
          energy: prevState.energy - 1,
          mood: 'SAD',
        }),
        this.meow
      );
    } else {
      console.log('The cat is too tired to play.');
    }
  }

  private logState(): void {
    console.log(
      `Current state -> Hungry: ${this.state.hungry}, Energy: ${this.state.energy}, Mood: ${this.state.mood}`
    );
  }

  render() {
    return (
      <div>
        <h1>The Cat Component</h1>
        <button onClick={this.feed}>Feed</button>
        <button onClick={this.play}>Play</button>
        <button onClick={this.sleep}>Sleep</button>
        <div>
          <p>Hungry: {this.state.hungry}</p>
          <p>Energy: {this.state.energy}</p>
          <p>Mood: {this.state.mood}</p>
        </div>
      </div>
    );
  }
}
```

Note:

_Why Can't React Use # Private Fields?_

React's State Management:

React manages component state (this.state) and lifecycle methods (componentDidMount, etc.) by directly interacting with the class instance.

# private fields are inaccessible outside the class definition, which makes them unsuitable for situations where React might need access.

_Why Avoid # Private Fields in React?_

They conflict with React's core philosophy of open access to methods and state.

Modern React with functional components and hooks makes class-based patterns (and # private fields) less necessary.

## Functional Component Solution with Hooks

```ts
import React, { useState } from 'react';

type Mood = 'HAPPY' | 'SAD';

const CatComponent: React.FC = () => {
  const [hungry, setHungry] = useState(3);
  const [energy, setEnergy] = useState(2);
  const [mood, setMood] = useState<Mood>('HAPPY');

  // Helper function to log the current state
  const logState = () => {
    console.log(
      `I am feeling ${mood} with energy level ${energy} and hunger level ${hungry}.`
    );
  };

  const sleep = () => {
    setEnergy((prev) => prev + 1);
    setHungry((prev) => prev + 1);
    console.log('The cat is sleeping...');
    logState();
  };

  const feed = () => {
    if (hungry > 0) {
      setHungry((prev) => prev - 1);
      setEnergy((prev) => prev + 1);
      setMood('HAPPY');
      console.log('Feeding the cat...');
    } else {
      console.log('The cat is not hungry.');
    }
    logState();
  };

  const play = () => {
    if (energy > 0) {
      setEnergy((prev) => prev - 1);
      setMood('SAD');
      console.log('Playing with the cat...');
    } else {
      console.log('The cat is too tired to play.');
    }
    logState();
  };

  return (
    <div>
      <h1>The Cat Component</h1>
      <button onClick={feed}>Feed</button>
      <button onClick={play}>Play</button>
      <button onClick={sleep}>Sleep</button>
      <div>
        <p>Hungry: {hungry}</p>
        <p>Energy: {energy}</p>
        <p>Mood: {mood}</p>
      </div>
    </div>
  );
};

export default CatComponent;
```

_Benefits of Functional Components and Hooks_

Cleaner Code: No need for constructors, this, or manual method bindings.

State Coherence: State updates are isolated and predictable via hooks.

Modern Practices: Functional components are the recommended approach in React as of recent versions.

Improved Readability: Logic and state management are easier to understand and modify.
