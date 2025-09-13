// globle scope

// let a = 10;

// local scope
// {
//   var a = 10;
//   console.log(a);
// }

// console.log(a);


// function scope

// function print() {
//   var a = 10;
//   console.log(a);
// }

// print();
// console.log(a);


// lexical enviornment scope 

function outer() {
  let value = 10;

  function inner() {
    console.log(value);
  }

  inner();
}
outer();

