//**** Here’s a JavaScript program to reverse a string without using the reverse() method:

const reverseString = (intputStr) => {
    let resultStringReverse = '';

    for(let i = intputStr.length - 1 ; i >=0; i--) {
        resultStringReverse += intputStr[i];
    }

    return resultStringReverse;

}

let strVal = "hellow world";
let result = reverseString(strVal);
console.log(result);


//*** 2. What is a generator function in JavaScript? How does it work?

// In JavaScript, a generator function is a special type of function that can pause its 
// execution and later resume from where it left off, allowing it to yield multiple values over time 
// rather than returning a single value. It is defined using the function* syntax, and it utilizes the yield 
// keyword to return values one at a time.

function* countUpTo(limit) {
    let count = 0;
    while (count < limit) {
      yield count; // pause and return value
      count++;
    }
  }

const counter = countUpTo(3);
console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: undefined, done: true }


// Explanation:
// The generator function countUpToThree uses the yield keyword to return values one by one.
// Calling counter.next() starts or resumes the function’s execution each time.
// The generator pauses at each yield statement and continues when next() is called again.
// When there are no more values to yield, next() returns { value: undefined, done: true }, indicating that the generator has finished.