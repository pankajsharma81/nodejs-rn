const fs = require("fs");

const a = 5;
const b = "Hello ji";

console.log(b);

function sum(a, b) {
  return a + b;
}

const fileData = fs.readFileSync("./data.json","utf-8")
console.log(fileData)

// fs.readFile("./data.json","utf-8", (err,res) => {
//   console.log(res);
// });

setTimeout(() => {
  console.log("set timeout");
}, 1000);

console.log(a);
console.log(sum(3, 4));
