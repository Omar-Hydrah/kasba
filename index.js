var crypto = require("crypto-js");
var sha    = crypto.SHA1;


function randomString(length=10){
	// Array of the alphabet will be used to generate a random string.
	// var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'h', 'i', 'j', 'k', 'l', "m", "n", "o" ]
	var alphabet = "a b c d e f g 9 h i j k 4 l m n o 5 p q r s 7 t u v w x y z".split(" ");

	var output = "";		// A random number from 0 to 20.
	for(var i = 0; i < length; i++){
		var randomNumber = Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10);
		output += alphabet[randomNumber];
	}
	
	return output;
}

// Hashes a string using the sha1 hash.
function hashString(string){
	var hash = sha(string);
	return hash.toString(crypto.enc.Hex);
}

// Creates a hash using a randomly generated string, and sha1
function createRandomHash(length=10){
	return hashString(randomString(length));
}


module.exports = {
	randomString: randomString,
	hashString  : hashString,
	createHash  : createHash
}
