#!/usr/bin/node
// Prints a square, first argument is the size of the square
// If it can't be converted to an integer, print "Missing size"
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let r = 0; r < size; r++) {
    let row = '';
    for (let c = 0; c < size; c++) row += 'X';
    console.log(row);
  }
}
