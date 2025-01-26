```ts
// Base Class: Person
class Person {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getDetails(): string {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

// Child Class 1: Teacher (inherits from Person)
class Teacher extends Person {
  subject: string;

  constructor(name: string, email: string, subject: string) {
    super(name, email); // Call the parent class constructor
    this.subject = subject;
  }

  teach(): string {
    return `${this.name} is teaching ${this.subject}.`;
  }
}

// Subclasses of Teacher
// 1. PrivateTeacher
class PrivateTeacher extends Teacher {
  students: string[];

  constructor(
    name: string,
    email: string,
    subject: string,
    students: string[]
  ) {
    super(name, email, subject); // Call the parent class constructor
    this.students = students;
  }

  getStudentList(): string {
    return `Students taught by ${this.name}: ${this.students.join(', ')}`;
  }
}

// 2. PublicTeacher
class PublicTeacher extends Teacher {
  school: string;

  constructor(name: string, email: string, subject: string, school: string) {
    super(name, email, subject); // Call the parent class constructor
    this.school = school;
  }

  getSchool(): string {
    return `${this.name} teaches at ${this.school}.`;
  }
}

// Child Class 2: Student (inherits from Person)
class Student extends Person {
  classes: string[];
  grades: { [subject: string]: string };

  constructor(
    name: string,
    email: string,
    classes: string[],
    grades: { [subject: string]: string }
  ) {
    super(name, email); // Call the parent class constructor
    this.classes = classes;
    this.grades = grades;
  }

  getSchedule(): string {
    return `${this.name} is enrolled in: ${this.classes.join(', ')}`;
  }

  getGrades(): string {
    return `${this.name}'s grades: ${Object.entries(this.grades)
      .map(([subject, grade]) => `${subject}: ${grade}`)
      .join(', ')}`;
  }
}

// Example Usage
const privateTeacher = new PrivateTeacher(
  'Mr. Smith',
  'smith@example.com',
  'Mathematics',
  ['John', 'Alice', 'Bob']
);

console.log(privateTeacher.getDetails());
console.log(privateTeacher.teach());
console.log(privateTeacher.getStudentList());

const publicTeacher = new PublicTeacher(
  'Mrs. Johnson',
  'johnson@example.com',
  'History',
  'Greenwood High'
);

console.log(publicTeacher.getDetails());
console.log(publicTeacher.teach());
console.log(publicTeacher.getSchool());

const student = new Student(
  'Emily',
  'emily@example.com',
  ['Math', 'History', 'Science'],
  { Math: 'A', History: 'B+', Science: 'A-' }
);

console.log(student.getDetails());
console.log(student.getSchedule());
console.log(student.getGrades());
```

## Output of Example Usage:

```
Name: Mr. Smith, Email: smith@example.com
Mr. Smith is teaching Mathematics.
Students taught by Mr. Smith: John, Alice, Bob

Name: Mrs. Johnson, Email: johnson@example.com
Mrs. Johnson is teaching History.
Mrs. Johnson teaches at Greenwood High.

Name: Emily, Email: emily@example.com
Emily is enrolled in: Math, History, Science
Emily's grades: Math: A, History: B+, Science: A-
```
