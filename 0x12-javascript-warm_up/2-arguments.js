#!/usr/bin/node
// Prints a message for a number of arguments
// If no arguments, print "No argument", if 1 found print "Argument found"
// Otherwise print "Arguments Found"
if (process.argv.length === 2) {
  console.log('No argument');
} else if (process.argv.length === 3) {
  console.log('Argument found');
} else {
console.log('Arguments found');
}
