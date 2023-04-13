#!/usr/bin/node
// Prints My number: converted first argument to integer>
// If can’t be converted to an integer, print "Not a number"
const num = Arith.Wall(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
