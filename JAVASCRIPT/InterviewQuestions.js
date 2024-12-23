//Here’s a JavaScript program to reverse a string without using the reverse() method:

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


