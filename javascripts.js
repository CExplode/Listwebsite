var input="";
var base="";
var arrWords= [];

function othername() {
	input = document.getElementById("userInput").value;
	arrWords.push(input);
	base = base + " " + input;
	document.getElementById("list").innerHTML = base;
	document.getElementById("userInput").value = "";
	
	
	
}

function displayArray() {
	document.getElementById("testArray").innerHTML = arrWords[2];
}
