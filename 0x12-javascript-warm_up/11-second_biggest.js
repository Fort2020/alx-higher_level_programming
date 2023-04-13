#!/usr/bin/node
// Searching 2 biggest integer in argument, 
// If none, print 0: if arguments is 1, print 0
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.map(Number)
    .slice(2, process.argv.length)
    .sort((a, b) => a - b);
  console.log(args[args.length - 2]);
}
