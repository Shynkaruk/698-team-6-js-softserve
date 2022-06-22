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

// Solution by Yuliia Tomashevska

//1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
    return string.split(" ") 
}

//2. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

//3. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript 
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}

//4. https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    var min =  Math.min(...arr);
    if (toReturn === "value") return min;
    if (toReturn === "index") return arr.indexOf(min);
  }

//5. https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    var sheeps = (queue.length -1) - queue.indexOf("wolf");
    return sheeps === 0 ? "Pls go away and stop eating my sheep" : 
    "Oi! Sheep number "+ sheeps +"! You are about to be eaten by a wolf!" ;
}

//6. https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x){
    return x.map(function(value){
      return value * 2;
    })
}

//7. https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive (arr) {
    var toReturn = null;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1] + 1) {
        toReturn = arr[i];
        break;
      }
    }
    return toReturn;
}