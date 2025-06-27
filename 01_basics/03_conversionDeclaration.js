let score = null

// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33a" => NaN
// true => 1, false => 0
// undefined => NaN
// null => 0

            // Boolean Conversion
let isLoggedIn = null

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true
// "Nik" => true
// "" => false, null => false, 0 => false


// To string conversion
let someNumber = null
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************** Operations *******************

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "U"
let str2 = "Dubey"

// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //bad practice

// console.log((2 + 2) * 5 % 21);

console.log(+true);
console.log(+"");

let num1,num2, num3 

// num1 = num2 = num3 = 2 + 2  // not a good practice as this decrease the code readability

// console.table([num1, num2, num3]);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

gameCounter--;
console.log(gameCounter);

