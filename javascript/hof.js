// let arr = [1, 2, 3, 4];

// const double = arr.map((e) => e * 2);
// console.log(double);


// Custom HOF

let salary = [100, 200, 300, 400, 500];
let salary2 = [600, 700, 800, 900, 1000];

function calculateTenPercent(num) {
  return num * 0.1;
}

function calculateTwentyPercent(num) {
  return num * 0.2;
}

// function calculateTax(salary, calculateFn) {
//   let res = [];

//   for (let i = 0; i < salary.length; i++) {
//     const e = salary[i];
//     res.push(calculateFn(e));
//   }
//   return res;
// }

Array.prototype.calculateTax = function (calculateFn) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    const e = this[i];
    res.push(calculateFn(e));
  }

  return res;
}

let finalOutput = salary.calculateTax(calculateTwentyPercent);
console.log(finalOutput);

