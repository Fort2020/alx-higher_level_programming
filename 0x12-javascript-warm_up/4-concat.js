Task 4. 4-concat.js
-------------------
#!/usr/bin/node
//A script that prints two arguments passed to it, in the following format: " is "

	const myArgs = process.argv.slice(2);
	console.log(myArgs[0], "is", myArgs[1]);
	if (!myArgs[0]) {
	    console.log("undefined is undefined");
	}
	else {
	    console.log(myArgs[0], "is", myArgs[1]);
	}
