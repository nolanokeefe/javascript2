// const car = {
//   color: 'blue',
//   gas: true,
//   drive() {
//     console.log('You are driving!');
//   },
// };
// car.color;
// car.drive();

//
//

// const bicycle = {
//   color: 'green',
//   electric: false,
// };
// console.log(bicycle.color);

//
//

// class Dog {
//   constructor(color, gender, breed) {
//     (this.color = color), (this.gender = gender), (this.breed = breed);
//   }
//   bark() {
//     console.log(`The ${this.color} dog barked!`);
//   }
// }

// const dog1 = new Dog('black', 'male', 'sheperd');
// const dog2 = new Dog('white', 'female', 'poodle');
// dog1.bark();
// dog2.bark();
// console.log(dog1.color);
// console.log(dog2.gender);

//
//in class practice - create a class with new const

// class car {
//   constructor(color, make, model) {
//     (this.color = color), (this.make = make), (this.model = model);
//   }
//   drive() {
//     console.log(`The ${this.model} drives fast`);
//     console.log(`The ${this.make} ${this.model} this a good car`);
//   }
// }
// const car1 = new car('red', 'Ford', 'Mustang');
// const car2 = new car('white', 'Toyota', 'Sienna');
// const car3 = new car('blue', 'Honda', 'Civic');
// car1.drive();
// car2.drive();
// console.log(car1.make);
// console.log(car2.color);
// console.log(car2.model);

//
// inherited classes example

// class Dog {
//   constructor(color, gender, breed) {
//     (this.color = color), (this.gender = gender), (this.breed = breed);
//   }
//   bark() {
//     console.log(`The ${this.color} dog barked!`);
//   }
// }

// class Cat extends Dog {
//   constructor(color, gender, breed) {
//     super(color, gender, breed);
//   }
//   meow() {
//     console.log(`The ${this.color} cat meowed!`);
//   }
// }

// const dog1 = new Dog('black', 'male', 'sheperd');
// const dog2 = new Dog('white', 'female', 'poodle');
// const cat1 = new Cat('brown', 'male', 'tiger');

// dog1.bark();
// dog2.bark();
// cat1.meow();
// console.log(dog1.color);
// console.log(dog2.gender);
// console.log(cat1.breed);

//
//in class practice 2 - create a extended class

// class car {
//   constructor(color, make, model) {
//     (this.color = color), (this.make = make), (this.model = model);
//   }
//   drive() {
//     console.log(`The ${this.model} drives fast`);
//     console.log(`The ${this.make} ${this.model} this a good car`);
//   }
// }

// class truck extends car {
//   constructor(color, make, model) {
//     super(color, make, model);
//   }
//   load() {
//     console.log(`The ${this.make} ${this.model} hauled rocks!`);
//   }
// }
// const car1 = new car('red', 'Ford', 'Mustang');
// const car2 = new car('white', 'Toyota', 'Sienna');
// const car3 = new car('blue', 'Honda', 'Civic');
// const truck1 = new truck('black', 'Chevy', 'Silverado');
// car1.drive();
// car2.drive();
// truck1.load();
// console.log(car1.make);
// console.log(car2.color);
// console.log(car2.model);

// JS Module - use to import and export into another file

// 16 NOVEMBER CLASS NOTES
//
// arrow function

// let color = (color) => console.log('green');
// let person = function (name)
// {
// };

// classback function

function myDisplay(text) {
  document.getElementById('demo').innerHTML = text;
}

function myFirst() {
  myDisplay('Hello');
}

function mySecond() {
  myDisplay('Bye');
}

myFirst();
mySecond();

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(10, 5);

myDisplay(result);
