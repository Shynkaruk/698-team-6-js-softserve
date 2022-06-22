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
