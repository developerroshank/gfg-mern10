function makeSandwich(raw, cb) {
  console.log('take a bread');
  cb();
}

function makeStuffing(cb) {
  console.log('stuffing');
  cb();
}

function grilled(cb) {
  console.log('grilled');
  cb();
}

makeSandwich("Bread", function () {
  makeStuffing(function () {
    setTimeout(() => {
      grilled(function () {
        console.log("Ready to serve");
      });
    }, 5000);
  });
});
