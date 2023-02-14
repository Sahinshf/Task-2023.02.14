// First Link

function Person(name, age, gender, habit) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.habit = habit;
}
Person.prototype.greeting = function () {
  console.log("Hi!" + " my name is " + this.name);
};
function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender); // .call (method)
  this.subject = subject;
}

Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false,
  writable: true,
});

Teacher.prototype.greeting = function () {
  console.log("Hi" + " my name is " + this.name + "I teach " + this.subject);
};

let person1 = new Person("Jane", 22, "F", "Sport");
let teacher1 = new Teacher("Jack", 21, "M", "Math");
Teacher.prototype.greeting = function () {
  console.log(
    "Hi, " + " my name is " + this.name + ". I teach " + this.subject
  );
};
console.log(person1.greeting());
console.log(teacher1.greeting());

// Second Link

const test = {
  // Function Decleration
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis());

function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a);

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a);

// Class extends
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}

new Good();
new AlsoGood();

console.log(this === window);

this.b = "MDN";
console.log(window.b);
console.log(b);

function sum() {
  return this.a + this.b + this.c;
}

const p = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(p, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});

console.log(p.average, p.sum);

class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

car.sayHi();
bird.sayHi = car.sayHi;
bird.sayHi();

bird.sayBye = car.sayBye;
bird.sayBye();
