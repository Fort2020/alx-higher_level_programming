#!/usr/bin/node
//A script that prints the addition of 2 integers

//First argument, first integer: second argument, second integer
//Define a function with this prototype: function add(a, b)

	const myArgs = process.argv.slice(2);
	let result = 0;
	function add (a, b) {
	  result = a + b;
	  return result;
	}
	add(parseInt(myArgs[0]), parseInt(myArgs[1]));
	console.log(result);
