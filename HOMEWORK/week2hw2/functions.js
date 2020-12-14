// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the
// largest of them. Use the if-then-else construct available in Javascript.

function maxOfTwoNumbers(num1, num2) {
    if(num1 < num2) {
      console.log(num2);
    } else {
        console.log(num1)
    }
}
maxOfTwoNumbers(4, 2);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThreeNumbers(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
      console.log(num1);
    } else if (num2 > num3 && num2 > num1) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

maxOfThreeNumbers(1000, 20, 10);

// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowel = ['a', 'e', 'i', 'o', 'u']

function isCharacterAVowel(vowels){
    if(vowels === 'a'||vowels === 'e'||vowels === 'i' || vowels === 'o' || vowels === 'u'){
        return "The character " + vowels + " is a vowel";
    }
    else{
        return "The character " + vowels + " is NOT a vowel" ;
    }
}
    console.log(isCharacterAVowel("z"));


// Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
// should return 10, and multiplyArray([1,2,3,4]) should return 24.

//multiple array
function multiplyArray(numbers) {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total = (total * numbers[i]);
  }
  return total;
}
console.log(multiplyArray([1,2,3,4]));


//sum array
function sumArray(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sumArray([1,2,3,4]));

// Write a function that returns the number of arguments passed to the function when called.

function numOfArg(...args) {
  return args.length;
}
console.log(`These are the number of arguments: ${numOfArg(1, 2, 3, 4, 5)}`);

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var newArr = [];
function reverseString(x) {
   x = x.split("")
   x.forEach(element => {
    newArr.unshift(element);
  });
  return newArr.join("");
}
console.log(`These are the number of arguments: ${reverseString("jag testar")}`);

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var newElement = 0;
function findLongestWord(...word) {
  word.forEach(element => {
    for (let index = 0; index < element.length; index++) {
      if(element[index].length > newElement){
        newElement = element[index].length
      }
    }
  });
  return newElement;
}
console.log(`Find the longest word: ${findLongestWord(["Hello", "World", "Software", "Engineering"])}`);

// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
var newElement2 = [];
function filterLongWords(arr, i) {
    arr.filter((element) => {
      if (element.length > i) {
        newElement2.push(element);
      }
    })
    return newElement2;
}
console.log(`Filter the longest words: ${filterLongWords(["Hello", "World", "Software", "Engineering"], 3)}`);

// Bonus

// 1. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
var newArr2 = [];
String.prototype.reverseString = function( ) {
    str = String(this)
    str = str.split("")
    str.forEach(element => {
    newArr2.unshift(element);
 });
 return newArr2.join("");
}
console.log(`Call the reverseString method on the word "Per Scholas": ${"Per Scholas".reverseString()}`);

// 2. Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

function obj(str) {
  let newObj = {};
  str = str.toLowerCase();
  var strArr = str.split(" ").join("").split("");
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== " ") {
      newObj[str[index]] = 0;
      strArr.forEach(element => {
        if (element.match(str[index])) {
          newObj[str[index]] += 1;
        }
      });
    }
  }
  return newObj; ;
}
