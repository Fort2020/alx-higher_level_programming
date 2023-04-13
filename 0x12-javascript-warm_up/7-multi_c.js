#!/usr/bin/node
//A script that prints x times "C is fun"
//Where x is the first argument of the script.

//If the first argument can’t be converted to an integer,
//print "Missing number of occurrences"

	const myArgs = process.argv.slice(2);
	let n = 0;
	if (isNaN(myArgs[0])) {
	  console.log("Missing number of occurrences");
	} else {
	  while (n < parseInt(myArgs[0])) {
	    console.log("C is fun");
	    n++;
	  }
	}
