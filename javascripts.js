var input="";
var myyybase="";

function othername() {
	input = document.getElementById("userInput").value;
	myyybase = myyybase + " " + input;
	document.getElementById("list").innerHTML = myyybase;
}