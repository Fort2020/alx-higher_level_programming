#!/usr/bin/node
// Searching 2 biggest integer in argument, if none, print 0: if arguments is 1, print 0
const myArgs = process.argv.slice(2);
if (!myArgs[0] || !myArgs[2]) {
  console.log(0);
} else {
  const args = myArgs.map(Number);
  const firstMax = Math.max.apply(null, args);
  args.splice(args.indexOf(firstMax), 1);
  console.log(Math.max.apply(null, args));
}
