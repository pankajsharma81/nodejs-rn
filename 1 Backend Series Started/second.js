console.log("second");

function add(a, b) {
  console.log(a + b);
}
function sub(a, b) {
  console.log(a + b);
}

console.log(module.exports); // {} - empty object
module.exports = { add, sub };
