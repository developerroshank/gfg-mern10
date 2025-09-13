// function which passed another as an argumnet called callback function

// function sum(a, b, callback) {
//   let res = a + b;
//   callback(res);
// }

// function printValue(res) {
//   console.log(res);
// }

// sum(10, 20, printValue);


function makeMaggy(raw, cb) {
  console.log('we are going to make maggi');
  cb();
}

function boiledWater(cb) {
  console.log("bowling the water");
  cb();
}

function finalStep(cb) {
  console.log("adding mashala into maggi");
  cb();
}

makeMaggy("noodles", function () {
  boiledWater(function () {
    finalStep(function () {
      console.log("Maggie is ready");
    });
  });
});