var input="";
var base="";

function othername() {
	input = document.getElementById("userInput").value;
	base = base + " " + input;
	document.getElementById("list").innerHTML = base;
	document.getElementById("userInput").value = "";
}
