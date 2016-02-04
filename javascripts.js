var input="";
var base="";
var arrayBase="";
var arrWords= [];
var arrinstances = [];
var tempCounter = 0;
var largestNum = 0;
var resortNumber = 0;

function othername() {
	input = document.getElementById("userInput").value;
	arrWords.push(input);
	base = base + " " + input;
	document.getElementById("list").innerHTML = base;
	document.getElementById("userInput").value = "";
}

function displayArray() {
	for( var i = 0; i < arrWords.length; i++) {
		
		for( var j = 0; j < arrWords.length; j++) {
			if (arrWords[j] == arrWords[i])
			{
				tempCounter += 1;
			}
			if (tempCounter > largestNum)
			{
				largestNum = tempCounter;
			}
			
		}
		arrinstances.push(tempCounter);
			tempCounter=0;
		
	}
	
	for( var k = largestNum; k > 0; k--) {
		for( var q = 0; q < arrWords.length; q++) {
			if (arrinstances[q] == k )
			{
				arrWords[resortNumber] = arrWords[q];
				resortNumber += 1;
			}
		}
	}
	
	document.getElementById("testArray").innerHTML = arrWords;
}
