// 1:

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// console.log(sum([2,12,3,4,5]));

// 2:

function multi(arr) {
  let sum = 1;
  for (let j = 0; j < arr.length; j++) {
    sum = sum * arr[j];
  }
  return sum;
}

// console.log(multi([2, 2, 2]));

// 3:

function sumOfNumber(number) {
  let sum = 0;
  let arr = [];
  while (number > 0) {
    arr.push(number % 10);
    number = number / 10;
    number = parseInt(number);
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// console.log(sumOfNumber(23901));

// 4:

let ages = [12, 34, 56, 89, 3];

function minAge(array) {
  let minAge = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minAge) {
      minAge = array[i];
    }
  }
  return minAge;
}

// console.log(minAge(ages));

function maxAge(arr) {
  let maxAge = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxAge) {
      maxAge = arr[i];
    }
  }
  return maxAge;
}

// console.log(maxAge(ages));

function sumOfAges(arr) {
  let sumAges = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAges += arr[i];
  }
  return sumAges;
}

// console.log(sumOfAges(ages));

function avgAge(arr) {
  let ages = 0;
  for (let i = 0; i < arr.length; i++) {
    ages += arr[i];
  }
  return ages / arr.length;
}

// console.log(avgAge(ages));

// 5:

let counter = 0;
const arrOfNum = [];

while (counter < 3) {
  let userInput = Number(prompt("insert a number"));
  if (userInput !== " " && userInput > 0 && userInput / 1 == userInput) {
    arrOfNum.push(userInput);
    if (userInput % 2 == 0) {
      // c:
      console.log(userInput + " " + "is even");
    } else {
      console.log(userInput + " " + "is odd");
    }
    counter++;
  } else {
    userInput;
  }
}

// a:
console.log("Multi Of Array is:" + multi(arrOfNum));

// b:
console.log("Sum Of Array is:" + sum(arrOfNum));
