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
//3 https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
// Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  var fiveLetter = [];
  for (var key in obj) {
    if (key.length === 5) fiveLetter.push(key);
    if (obj[key].length === 5) fiveLetter.push(obj[key]);
  }
  return fiveLetter;
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
  let arrayFive = [];
  for (let key in obj) {
    if (key.length === 5) {
      arrayFive.push(key);
    }
    if (obj[key].length === 5) {
      arrayFive.push(obj[key]);
    }
  }
  return arrayFive;
}

