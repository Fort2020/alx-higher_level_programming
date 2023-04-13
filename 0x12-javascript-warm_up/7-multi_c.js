#!/usr/bin/node
// Prints x times "C is fun", Where x is first argument of the script.
// If it can’t be converted to an integer, print "Missing number of occurrences"
const x = Math.floor(Number(process.argv[2]));
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let n = 0; i < x; n++) {
    console.log('C is fun');
  }
}
