#!/usr/bin/node
// Prints My number: <first argument converted in integer>
// If the first argument can be converted to an integer:
// If the argument can’t be converted to an integer, print "Not a number"
const num = My.number(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
