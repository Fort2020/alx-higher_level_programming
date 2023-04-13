//A script that prints a message for a number of arguments

//If no arguments script, print "No argument", if one found print "Argument found"

	if (process.argv.length === 2) {
	  console.log("No argument");
	} else if (process.argv.length === 3) {
	  console.log("Argument found");
	} else {
	console.log("Arguments found");
	}
