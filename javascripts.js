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
	
	document.getElementById("typeButton").style.visibility = "visible";
	document.getElementById("listButton").style.visibility = "visible";
	document.getElementById("analyticsButton").style.visibility = "visible";
}

function butType() {
	document.getElementById("userInput").value = "";
	
	document.getElementById("userInput").style.visibility = "visible";
	document.getElementById("typeSubmit").style.visibility = "visible";
	
	document.getElementById("userWordParagraph").style.visibility = "hidden";
	document.getElementById("userWordTest").style.visibility = "hidden";
	document.getElementById("userWordSubmit").style.visibility = "hidden";
	document.getElementById("list").style.visibility = "hidden";
	document.getElementById("mostWordSearch").style.visibility = "hidden";
}

function butList() {
	document.getElementById("list").style.visibility = "visible";
	
	document.getElementById("userWordParagraph").style.visibility = "hidden";
	document.getElementById("userWordTest").style.visibility = "hidden";
	document.getElementById("userWordSubmit").style.visibility = "hidden";
	document.getElementById("userInput").style.visibility = "hidden";
	document.getElementById("typeSubmit").style.visibility = "hidden";
	document.getElementById("analyticsList").style.visibility = "hidden";
	document.getElementById("mostWordSearch").style.visibility = "hidden";
	
	document.getElementById("list").innerHTML = base;
}

function butAnalytics() {
	document.getElementById("userWordParagraph").innerHTML = "";
	document.getElementById("userWordTest").style.visibility = "visible";
	document.getElementById("userWordSubmit").style.visibility = "visible";
	document.getElementById("list").style.visibility = "visible";
	document.getElementById("userWordParagraph").style.visibility = "visible";
	document.getElementById("mostWordSearch").style.visibility = "visible";
	
	document.getElementById("userInput").style.visibility = "hidden";
	document.getElementById("typeSubmit").style.visibility = "hidden";
	document.getElementById("list").style.visibility = "hidden";

}

function searchWord() {
	input = document.getElementById("userWordTest").value;
	intCount = 0;
	for(var i = 0; i < arrWords.length; i++){
		if(input == arrWords[i]){
			intCount++;
		}
	}
	
	document.getElementById("userWordParagraph").innerHTML = input + " has been typed in " + intCount + " times.";
	document.getElementById("userWordTest").value = "";
	}

function mostWordSearch() {
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
		
        document.getElementById("analyticsList").innerHTML = "The most common word is " + intMode;	
	}
}
