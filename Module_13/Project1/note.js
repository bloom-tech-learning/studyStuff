// Scope 
// scope answers the question of where are my functions and variable available to me

// Global variables - available anywhere in your program
const cohort = 'web48';

// let and const can be global within your program but var is the only variable declearation attached the window object 

/*
var 
- can be redefined 
- can be updated 
- function scoped

let 
- cannot be redefined
- can be updated 
- block scoped

const 
- cannot be redefined
- cannot be updated 
- block scoped
*/

// Function Scope 
// when a varibale is created inside a function that variable is only ever available inside that function unless we explicitly return it 

// const track = 'UX';

// function lambda(){
//   const cohort = 'web48';
//   const track = 'web';
  
//   console.log(cohort);
//   console.log(track);
// }

// lambda();

// Scope look up - it looks inside the function first - then it looks up a level then it looks up another level if it can't find a value 


// shadow variables when you have two variables with the same name in different scopes // not great practice

// Block Scope 
// let and const are block scoped 
// if(1 === 1){
//   var answer = true;
// }

// console.log(answer);


// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log(i);

// use const until you can't and then let but stay away from var 

// let dog = 'Ada'; // global

// function callDog(dog){
//   console.log(dog);
// }

// function puppy(){
//   dog = 'Noa'; // function scoped
//   callDog('Fido');
//   // console.log(dog)
// }

// puppy();

// Best Practices 
// try not to create global variables - when we get into modules it's difficult to do this unless we explicitly attach it to the window object 
// having global variables can lead to bugs - especially if there is more than 1 dev working on a program 


// Function are scoped in the same way variables are scoped 

// function sayHi(name){
//   function yell(){
//     console.log(name.toUpperCase());
//   }
//   yell();
// }

// sayHi('David');

// yell(); // will this work? 

// if you create a function within another function that function will only ever be available inside of it's parent function 

//HOISTING 
// allows you to access functions and variables before they have been created 
// two thing in javaScript are hoisted - function declearations and var 

// console.log(working());
// function declearation 
// function working(){
//   return 'its working!!!!';
// }

// console.log(working());

// // function expression - NOT HOSITED 
// const working = function(){
//   return 'its working!';
// }


// console.log(working());
// // arrow function - NOT HOISTED! 

// const working = () => 'its working';
// console.log(myName); // I can see that this exists but I don't have a value yet = undefined 

// var myName = 'Brit';

// console.log(myName); // our value is given to us
