let response = {
  status: 300,
  header: {
    type: "json",
    version: 1.1,
  },
  body: {
    name: "roshan",
    age: 20,
    isEmployed: true,
    address: {
      street: "123 main st",
      city: "New York",
      state: "NY",
    },
    footer: {
      type: "json",
      version: 1.1,
    }
  }
}

console.log(`Status: ${response.status}, Address: ${response.body.address.street}, Version: ${response.body.footer.version}`);

// function add(a, b) {
//   return a + b;
// }

// (...) using for rest, spread, shallow copy
function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    const e = args[i];
    sum += e;
  }
  return sum;
}

let res = add(5, 2, 5, 5, 4, 5, 4, 5, 2);
console.log(res);


