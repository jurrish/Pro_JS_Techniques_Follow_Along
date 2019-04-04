//a function that generates a new function for adding numbers
// function addGenerator( num ){
//
//   //return a simple function for adding two numbers with
//   //the first number borrowed from the generator
//   return toAdd(num){
//     return num + toAdd
//   };
// }
//
// //addFive now contains a function that takes a single
// //argument, adds five to it, and returns the resulting
// //number
// var add5 = addGenerator( 5 );
//
// //we can see here that the result of the addFive function is 9
// add5( 4 ) //9


//es6

const sum = x => y => x + y;

const addGenerator = num => toAdd => num + toAdd;

console.log( sum(2)(1) );

const add2 = addGenerator(1);
add2(1);
console.log( add2(1) );

//We can curry in Javascript because
// JAGASCRIPT HAS FIRST CLASS FUNCTIONS
// FUNCTIONS CAN BE ARGUMENTS AND RETURN VALUES


const someFunction = () => console.log ('Hello World!');
const firstClass1 = functionAsArgument => functionAsArgument ();
firstClass1(someFunction); // Hello World! is printed out
const firstClass2 = () => someFunction;
firstClass1 (firstClass2()); // Hello World! is printed out
