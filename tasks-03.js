//solution by Vlad
//1 - Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//2 Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return Math.PI * circle.radius * 2;
}
//3 Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  var fiveLetter = [];
  for (var key in obj) {
    if (key.length === 5) fiveLetter.push(key);
    if (obj[key].length === 5) fiveLetter.push(obj[key]);
  }
  return fiveLetter;
}

//Поглибленні задачі
//1 Understanding closures - the basics
// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript
function buildFun(n) {
  var res = []
  function closuresFunction(index) {
    return function () {
      return index;
    };
  };
  for (var i = 0; i < n; i++) {
    res.push(
      closuresFunction(i)
    )
  }
  return res
}

//2 Fun with ES6 Classes #2 - Animals and Inheritance
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}


//solution by Iryna
//1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//2. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const arrayFive = [];
  for (const key in obj) {
    if (key.length === 5) {
      arrayFive.push(key);
    }
    if (obj[key].length === 5) {
      arrayFive.push(obj[key]);
    }
  }
  return arrayFive;
}

//Задачка про замикання
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(() => i);
  }
  return res;
}

//Задачка про наслідування
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
    this.introduce = () => `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.greetMaster = () => `Hello ${master}`;
  }
}


//solution by Yuliia
//1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort(function(a,b){
      return a - b;
    })[0]
  }
}

//2. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return Math.PI * circle.radius * 2;
}

//3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  var fiveLetter = [];
  for (var key in obj) {
    if (key.length === 5) {
      fiveLetter.push(key);
    }
    if (obj[key].length === 5) {
      fiveLetter.push(obj[key]);
    }
  }
  return fiveLetter;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n){
	var res = []
	for (let i = 0; i< n; i++){
		res.push(function(){
      return i;
		})
	}
	return res
}

// Поглибленні:

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce()+"  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster(){
    return "Hello " + this.master;
  }
}

// Yura Shyndor		
 
//task 1

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//task 2

function circleCircumference(circle) {
  return Math.PI * circle.radius * 2;
}

//task 3

function giveMeFive(obj){
  //coding here
  const fiveArr = [];
  for (const key in obj) {
    if(key.length === 5) fiveArr.push(key);
    if(obj[key].length === 5) fiveArr.push(obj[key]);
}
  return fiveArr
}

// task 4
//...

//task 5

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
}
  introduce() {
    return `{$super.introduce()} "Meow meow!"`;
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}