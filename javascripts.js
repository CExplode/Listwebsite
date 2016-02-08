var input="";
var base="";
var arrayBase="";
var arrWords= [];
var arrinstances = [];
var tempCounter = 0;
var largestNum = 0;
var resortNumber = 0;
var tempHolder1="";
var tempHolder2="";
var intCount=0;
var intMode="";

function othername() {
	input = document.getElementById("userInput").value;
	arrWords.push(input);
	base = base + " " + input;
	document.getElementById("list").innerHTML = base;
	document.getElementById("userInput").value = "";
}

function displayArray() {
	for(var i = 0; i < arrWords.length; i++)
	{
        tempHolder1 = arrWords[i];
        tempCounter = 1;
        
        for(var j = 0; j < arrWords.length; j++)
        {
            tempHolder2 = arrWords[j];
                
            if(tempHolder1 == tempHolder2)
            {
                tempCounter++;
            }
            
            if(tempCounter > intCount)
            {
                intCount = tempCounter;
                intMode = tempHolder1;
            }
        }
		
        document.getElementById("testArray").innerHTML = intMode;
		
	}
}
