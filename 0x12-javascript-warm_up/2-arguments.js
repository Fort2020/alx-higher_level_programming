#!/usr/bin/node
// If no arguments, print "No argument", if 1 found print "Argument found"
// Otherwise print "Arguments Found"
if (process.argv.length === 2) {
  console.log('No Argument');
} else if (process.argv.length === 3) {
  console.log('Argument found');
} else {
console.log('Arguments found');
}
