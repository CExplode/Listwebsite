var input="";
var myyybase="";

function testFunction() {
	document.getElementById("testp").innerHTML = "Papaya. Guava. P-Diddy.";
}

function othername() {
	input = document.getElementById("userInput").value;
	myyybase = myyybase + " " + input;
	document.getElementById("testp2").innerHTML = myyybase;
}