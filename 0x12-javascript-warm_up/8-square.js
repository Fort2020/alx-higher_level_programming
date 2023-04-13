#!/usr/bin/node
// Prints a square, first argument is the size of the square
// If it can't be converted to an integer, print "Missing size"
const myArgs = process.argv.slice(2);
let a, b;
if (isNaN(myArgs[0])) {
  console.log("Missing size");
} else {
  for (a = 0; a < parseInt(myArgs[0]); a++) {
    let row = "";
    for (b = 0; b < parseInt(myArgs[0]); b++) {
      row += "X";
    }
    console.log(row);
  }
}
