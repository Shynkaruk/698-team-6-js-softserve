// Solution by Vladislav Kulybaba


//1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
    return string.split(" ");
}

//2 https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

//3 https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
    list.sort((a, b) => a - b);
    return list[0];
}

var max = function (list) {
    list.sort((a, b) => b - a);
    return list[0];
}

//4 https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
    let value = Math.min.apply(null, arr);
    return toReturn === 'value' ? val : arr.indexOf(val);
}
//Поглиблені задачі:

//1 https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  const sheepQueue = queue.reverse();
  let wolfIndex =  sheepQueue.indexOf("wolf");
  const wolfMessageEaten = `Oi! Sheep number ${wolfNum}! You are about to be eaten by a wolf!`;
  const wolfMessageAway = `Pls go away and stop eating my sheep`;
 return sheepQueue.indexOf("wolf") !== 0 ? wolfMessageEaten : wolfMessageAway;
}

//2 https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x){
  return x.map((num) => num * 2);
}

//3 https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

// Solution by Iryna
//1. https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(' ');
}

//2. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.split('T').join('U');
}

//3. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript 
var min = function (list) {
    return Math.min(...list);
};
var max = function (list) {
    return Math.max(...list);
};

//4. https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}
//Поглиблені задачки
//1. https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    if (queue.indexOf('wolf') + 1 === queue.length) {
        return "Pls go away and stop eating my sheep";
    }
    return `Oi! Sheep number ${queue.length - queue.indexOf('wolf') - 1}! You are about to be eaten by a wolf!`;
}

//2. https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
    return x.map((num) => num * 2);
}

//3. https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    if (arr.length === 0) {
        return null;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) {
            return arr[i];
        }
    }
}

//Додаткові задачки
//1. https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
    return parseInt(2 * i);
}

//2. https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
    return Math.ceil(year / 100);
}

//3. https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

//4. https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

//5. https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
    return -Math.abs(num);
}

//6. https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
    return (parseInt(s * 100000 / 3600));
}

//7. https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
    return 180 - a - b;
}

//8. https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//9. https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
    return 2 * n - 2;
}

//10. https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    if (n <= 1) {
        return 0;
    }
    if (n < 13) {
        return n - 1;
    }
    return n - 2;
}

//11. https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
    return 1000 * (s + 60 * (m + 60 * h));
}

//12. https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    return n % (x * y) === 0 ? true : false;
}

// Solution by Yuliia Tomashevska

//1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ")
}

//2. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

//3. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript 
var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}

//4. https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    var min = Math.min(...arr);
    if (toReturn === "value") return min;
    if (toReturn === "index") return arr.indexOf(min);
}

//5. https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    var sheeps = (queue.length - 1) - queue.indexOf("wolf");
    return sheeps === 0 ? "Pls go away and stop eating my sheep" :
        "Oi! Sheep number " + sheeps + "! You are about to be eaten by a wolf!";
}

//6. https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
    return x.map(function (value) {
        return value * 2;
    })
}

//7. https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    var toReturn = null;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            toReturn = arr[i];
            break;
        }
    }
    return toReturn;
}
