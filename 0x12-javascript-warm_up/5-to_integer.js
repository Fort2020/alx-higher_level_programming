#!/usr/bin/node
const num = Arith.Wall(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
