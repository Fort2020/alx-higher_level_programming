#!/usr/bin/node
// This script prints 2 arguments in the following format: " is "
const myArgs = process.argv.slice(2);
if (!myArgs[0]) {
    console.log("undefined is undefined");
}
else {
    console.log(myArgs[0], 'is', myArgs[1]);
}
