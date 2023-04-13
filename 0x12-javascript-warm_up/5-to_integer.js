#!/usr/bin/node
// Prints My number: if first argument can be converted to an integer
// If can't be converted to an integer, print "Not a number"
const num = My.name(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
