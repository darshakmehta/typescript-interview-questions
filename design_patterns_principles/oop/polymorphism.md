```ts
// Define the Figure interface (Parent Interface)
interface Figure {
  calculateSurface(): number;
  calculatePerimeter(): number;
}

// Child Class 1: Triangle
class Triangle implements Figure {
  private base: number;
  private height: number;
  private sideA: number;
  private sideB: number;
  private sideC: number;

  constructor(
    base: number,
    height: number,
    sideA: number,
    sideB: number,
    sideC: number
  ) {
    this.base = base;
    this.height = height;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  calculateSurface(): number {
    return (this.base * this.height) / 2;
  }

  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }
}

// Child Class 2: Circle
class Circle implements Figure {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateSurface(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Child Class 3: Rectangle
class Rectangle implements Figure {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateSurface(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Example usage with polymorphism
const figures: Figure[] = [
  new Triangle(10, 5, 6, 7, 8),
  new Circle(7),
  new Rectangle(8, 12),
];

figures.forEach((figure, index) => {
  console.log(`Figure ${index + 1}:`);
  console.log(`- Surface: ${figure.calculateSurface()}`);
  console.log(`- Perimeter: ${figure.calculatePerimeter()}`);
});
```

## React Implementation

```ts
import React from 'react';

// Parent Interface: Figure
interface Figure {
  calculateSurface: () => number;
  calculatePerimeter: () => number;
}

// Triangle Component
const Triangle: React.FC<{
  base: number;
  height: number;
  sideA: number;
  sideB: number;
  sideC: number;
}> = ({ base, height, sideA, sideB, sideC }) => {
  const calculateSurface = (): number => (base * height) / 2;
  const calculatePerimeter = (): number => sideA + sideB + sideC;

  return (
    <div>
      <h3>Triangle</h3>
      <p>Surface: {calculateSurface()}</p>
      <p>Perimeter: {calculatePerimeter()}</p>
    </div>
  );
};

// Circle Component
const Circle: React.FC<{ radius: number }> = ({ radius }) => {
  const calculateSurface = (): number => Math.PI * radius * radius;
  const calculatePerimeter = (): number => 2 * Math.PI * radius;

  return (
    <div>
      <h3>Circle</h3>
      <p>Surface: {calculateSurface().toFixed(2)}</p>
      <p>Perimeter: {calculatePerimeter().toFixed(2)}</p>
    </div>
  );
};

// Rectangle Component
const Rectangle: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  const calculateSurface = (): number => width * height;
  const calculatePerimeter = (): number => 2 * (width + height);

  return (
    <div>
      <h3>Rectangle</h3>
      <p>Surface: {calculateSurface()}</p>
      <p>Perimeter: {calculatePerimeter()}</p>
    </div>
  );
};

// Parent Component: FiguresCollection
const FiguresCollection: React.FC = () => {
  const figures: JSX.Element[] = [
    <Triangle
      key='triangle'
      base={10}
      height={5}
      sideA={6}
      sideB={7}
      sideC={8}
    />,
    <Circle key='circle' radius={7} />,
    <Rectangle key='rectangle' width={8} height={12} />,
  ];

  return (
    <div>
      <h2>Figures Collection</h2>
      {figures.map((figure, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px 0',
          }}
        >
          {figure}
        </div>
      ))}
    </div>
  );
};

// App Component
const App: React.FC = () => {
  return (
    <div>
      <h1>Polymorphism Example with React</h1>
      <FiguresCollection />
    </div>
  );
};

export default App;
```
